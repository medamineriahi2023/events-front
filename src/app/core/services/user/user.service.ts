import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AbstractServiceService} from "../abstract-service.service";
import {User} from "../../../models/User";
import {Role} from "../../../models/Role";

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractServiceService<User>{
    public url: string;

  constructor(public http:HttpClient) {
      super("users" , http);
  }


    getUserName(userId: string ): Observable<Map<string, string>>{
        return this.http.get<Map<string, string>>(this.url + `/${userId}` );
    }

    getRoles(): Observable<Role[]>{
        return this.http.get<Role[]>(this.url + `/roles` );
    }

    resetPassword(data: any, password: any) {
        return this.http.post(this.url + `/resetPassword/${data}/${password}`, {});
    }

    assignRolesToUser(userId: string, rolesId: any[]): Observable<any> {
        const requestBody = {
            userId: userId,
            roleIds: rolesId
        };
        return this.http.post(this.url + '/roles/assignRolesToUser', requestBody);
    }

    assignCompositeRolesForRole(roleId: string, rolesIds: string[]) {
        const requestBody = {
            roleId: roleId,
            rolesIds: rolesIds
        };
        return this.http.post(this.url + '/roles/assignPermissionToRole', requestBody);
    }

    getAllPermissions(): Observable<Role[]>
    {
        return this.http.get<Role[]>(this.url +'/roles/permissions')
    }


    updateRole(role: Role): Observable<Role>
    {
        return this.http.put<Role>(this.url + `/roles`, role);
    }

    saveRole(roleName: string): Observable<Role>
    {
        return this.http.post<Role>(this.url + `/roles/${roleName}`, {});
    }

    deleteRole(roleName: any){
        return this.http.delete<Role>(this.url + `/roles/${roleName}`);

    }

}
