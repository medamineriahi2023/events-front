import {AfterViewInit, ChangeDetectorRef, Component, Inject, ViewChild} from '@angular/core';
import {Role} from "../../../models/Role";
import {MatSelect} from "@angular/material/select";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatOption} from "@angular/material/core";
import {UserService} from "../../../core/services/user/user.service";

@Component({
  selector: 'app-add-edit-user-roles',
  templateUrl: './add-edit-user-roles.component.html',
  styleUrls: ['./add-edit-user-roles.component.scss']
})
export class AddEditUserRolesComponent implements AfterViewInit{

    roles: Role[];
    rolesId : any[] = [];
    filter:string ="";

    @ViewChild('rolesList', {static: false}) groupList: MatSelect;


    constructor(
        public dialogRef: MatDialogRef<AddEditUserRolesComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private cd: ChangeDetectorRef,
        private userService:UserService) {
        data.fix.roles.forEach(g => this.rolesId.push(g.id));
        this.roles = data.roles;

    }

    ngAfterViewInit(): void {
        this.groupList.options.forEach((option: MatOption) => {
            if (this.rolesId.indexOf(option.value) !== -1) {
                option.select();
            }
        });
        this.cd.detectChanges();
    }




    add(){
        let userId = this.data.fix.id;
        let rolesId : any[];
        this.rolesId = this.groupList.value;
        rolesId = this.rolesId.filter(r => r!== undefined);
        this.userService.assignRolesToUser(userId, rolesId).subscribe(r =>  this.dialogRef.close(true));

    }
    close() {
        this.dialogRef.close();
    }

    toggleAllSelection(event) {

        if (event.source.selected){
            this.groupList.options.forEach((option: MatOption) => {
                if (option._getHostElement().style.display !== "none" && option.value != undefined) {
                    option.select();
                }
            });
        }
        else
            this.groupList.value = [];

    }


}
