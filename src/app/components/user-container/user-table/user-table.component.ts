import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../core/services/user/user.service";
import {ConfirmActionDialogData} from "../../modals/models";
import {
    ConfirmActionDialogComponent
} from "../../../shared/dialog/confirm-action-dialog/confirm-action-dialog.component";
import {User} from "../../../models/User";
import {Role} from "../../../models/Role";
import {AddUserComponent} from "../../modals/add-user/add-user.component";
import {ResetPasswordComponent} from "../../modals/reset-password/reset-password.component";
import {AddEditUserRolesComponent} from "../../modals/add-edit-user-roles/add-edit-user-roles.component";
import {WebsocketService} from "../../../core/notification/WebsocketService";
import {KeycloakService} from "keycloak-angular";
import {NotificationService} from "../../../core/notification/NotificationService";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit, AfterViewInit{
    displayedColumns: string[] = ['FIRST NAME','LAST NAME', 'USER NAME', 'EMAIL', 'STATUS' ,'ROLES', 'ACTIONS'];
    dataSource: MatTableDataSource<User>;
    @Input() refresh :boolean;
    @Input() filterValue = '';
    @Input() filterPredicate: (data: User, filter: string) => boolean;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    users: User[] = [];
    roles: Role[];
    private topic: string;

    constructor(private _cdRef: ChangeDetectorRef,
                private keycloakService: KeycloakService,
                private _matDialog: MatDialog,
                private userService:UserService,
                private webSocketService:WebsocketService,
                private notificationService:NotificationService,
                private messageService:MessageService
    ) {

        this.dataSource = new MatTableDataSource();

    }

    ngOnInit(): void {
        this.filterChange();
        this.listenForDataChnages();
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    filterChange() {
        if (this.dataSource) {
            this.dataSource.filter = this.filterValue;
        }
    }

    listenForDataChnages() {

        this.userService.getAll().subscribe(u => {this.dataSource.data = u["users"]; this.roles = u["users"].flatMap(e => e.roles) ;this.refresh = false;});

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.filterValue) {
            this.filterChange();
        }
        if (changes.refresh) {
            this.listenForDataChnages();
        }
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    openConfirmActionDialog(confirmActionDialogData: ConfirmActionDialogData) {
        return this._matDialog.open(ConfirmActionDialogComponent, {
            panelClass: 'confirm-action-dialog',
            data: confirmActionDialogData
        });
    }

    delete(user: User) {
        const confirmActionDialogData: ConfirmActionDialogData = {
            message: "You really want to delete "+ user.username +" ?",
            errorMessage: "be carefull this user is active !"
        };
        this.openConfirmActionDialog(confirmActionDialogData).afterClosed().subscribe((res: any[]) => {
            if (res) {
                this.userService.delete(user.id).subscribe(s => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is deleted successfully' });
                    this.listenForDataChnages();
                }, error => {this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User is not deleted' });
                });
            }
        });
    }
    //
    // edit_user(user: User) {
    //     this._matDialog.open(AddUserComponent, {
    //         data: {
    //             fix: user,
    //         }
    //     });
    // }
    //
    // edit_user_groups(user: User) {
    //     this._matDialog.open(EditUserGroupsComponent, {
    //             data: {
    //                 fix: user,
    //                 groups: this.groups,
    //                 groupList : this.groupList
    //             }
    //         }
    //     );
    // }
    //
    edit_user_roles(user: User) {
        const dialogRef = this._matDialog.open(AddEditUserRolesComponent, {
                data: {
                    fix: user,
                    roles: this.roles
                }
            }
        );
        dialogRef.afterClosed().subscribe(res => {
                this.listenForDataChnages();
        });
    }
    //
    resetPassword(user: User){
        this._matDialog.open(ResetPasswordComponent, {
                data: user.id
            }
        );
    }
    edit_user(row) {

         this._matDialog.open(AddUserComponent, {
           data : row
         }).afterClosed().subscribe(res =>{
             if (res)
             this.listenForDataChnages();
         })

    }


}
