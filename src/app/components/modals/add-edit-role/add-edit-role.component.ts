import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Role } from 'app/models/Role';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {UserService} from "../../../core/services/user/user.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.scss']
})
export class AddEditRoleComponent {
    roleForm: FormGroup;
    role: Role = {id: undefined, name: ''};
    submitted = false;

    title?: string;
    operation?:string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<AddEditRoleComponent>,
                private userService:UserService,
                private messageService:MessageService) {
        if (this.data == null){
            this.title = "Add new role";
            this.operation = "Save";
        }else {
            this.title = "Update role";
            this.operation = "Update";
        }
        this.roleForm = new FormGroup({
                name: new FormControl(this.data?.name, [Validators.required]),
            },
        );
    }


    onSubmit() {

        this.role.name = this.roleForm.get('name').value;
        if (this.operation === "Save"){
            this.userService.saveRole(this.role.name).subscribe(e => {this.dialogRef.close();
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Role is added successfully' });
            }, error => {this.messageService.add({ severity: 'error', summary: 'Error', detail: "Error occurred" });})
        }else {
            this.role.id = this.data.id;
            this.userService.updateRole(this.role).subscribe(e  => {this.dialogRef.close();
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Role is edited successfully' });
            }, error => {this.messageService.add({ severity: 'error', summary: 'Error', detail: "Error occurred"});})
        }
        this.submitted = true;

    }

    close() {
        this.dialogRef.close();
    }

}
