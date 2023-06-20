import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../../core/utils/CustomValidators";
import {UserService} from "../../../core/services/user/user.service";
import {LocationService} from "../../../core/services/location/location.service";
import {Location} from "../../../models/Location";
import {MatSelect} from "@angular/material/select";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, AfterViewInit{
    userForm: FormGroup;
    user: User = {id: undefined, username: '', firstName: '', lastName: '', email: '', active: true, password: '' ,locationDto: null};
    title?: string;
    operation?:string;
    submitted = false;
    locations: Location[] = [];

    @ViewChild('locationList', {static: false}) locationList: MatSelect;


    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddUserComponent>,
        private userService:UserService,
        private locationService: LocationService,
        private messageService:MessageService
    ) {
        this.locationService.getAll().subscribe(e => {this.locations =e });

        if (this.data == null){
            this.title = "Add new user";
            this.operation = "Save";
        }else {
            this.title = "Update user";
            this.operation = "Update";
        }
        this.userForm = new FormGroup({
                userName: new FormControl(this.data?.username, [Validators.required]),
                firstName: new FormControl(this.data?.firstName, [Validators.required]),
                lastName: new FormControl(this.data?.lastName,[Validators.required]),
                email: new FormControl(this.data?.email,[Validators.required, Validators.email]),
                password: new FormControl(this.data?.password,this.operation == 'Save'?[Validators.required]:null),
                confirmPassword: new FormControl(this.data?.password,this.operation == 'Save'?[Validators.required]:null),
                active: new FormControl(this.data?.active)
            },
            CustomValidators.mustMatch('password', 'confirmPassword')
        );
    }

    ngAfterViewInit(): void {
        this.locationList.value = this.data?.locationDto?.id;

    }

    ngOnInit(): void {
        }


    onSubmit() {
        this.user.username = this.userForm.get('userName').value;
        this.user.firstName = this.userForm.get('firstName').value;
        this.user.lastName = this.userForm.get('lastName').value;
        this.user.email = this.userForm.get('email').value;
        this.user.password = this.userForm.get('password').value;
        this.user.active = this.userForm.get('active').value;
        const location = new Location();

        if (this.operation === "Save"){
            location.id = this.locationList.value;
            this.user.locationDto = location;
            this.userService.save(this.user).subscribe(u => { this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User added successfully' });this.dialogRef.close(true)},
                error => {this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error });});
        }else {
            location.id = this.data?.locationDto?.id;
            this.user.locationDto = location;
            this.user.id = this.data?.id;
            this.userService.update(this.user).subscribe(u  => { this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User edited successfully' });this.dialogRef.close(true)},
                error => {this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error });});
        }


    }

    close() {
        this.dialogRef.close();
    }
}
