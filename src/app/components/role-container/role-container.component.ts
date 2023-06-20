import { Component } from '@angular/core';
import {Role} from "../../models/Role";
import {MatDialog} from "@angular/material/dialog";
import {AddEditRoleComponent} from "../modals/add-edit-role/add-edit-role.component";

@Component({
  selector: 'app-role-container',
  templateUrl: './role-container.component.html',
  styleUrls: ['./role-container.component.scss']
})
export class RoleContainerComponent {
    filterValue = '';
    public refresh: boolean = false;

    constructor(private _matDialog: MatDialog) {
    }


    addRole() {
        this._matDialog.open(AddEditRoleComponent, {}).afterClosed().subscribe(e => {
                this.refresh = true;
        });
    }


    filterPredicate: (role: Role, filter: string) => boolean = (role: Role, filter: string): boolean => {
        const keys = ['name'];
        const dataStr = Object.keys(role as unknown as Record<string, any>).filter(key => keys.includes(key))
            .reduce((currentTerm: string, key: string) => {
                return currentTerm + (role as unknown as Record<string, any>)[key] + '◬';
            }, '')
            .toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();

        return dataStr.indexOf(transformedFilter) !== -1;
    };
}
