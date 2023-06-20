import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router';
import {FuseModule} from '@fuse';
import {FuseConfigModule} from '@fuse/services/config';
import {FuseMockApiModule} from '@fuse/lib/mock-api';
import {CoreModule} from 'app/core/core.module';
import {appConfig} from 'app/core/config/app.config';
import {mockApiServices} from 'app/mock-api';
import {LayoutModule} from 'app/layout/layout.module';
import {AppComponent} from 'app/app.component';
import {appRoutes} from 'app/app.routing';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.states';
import {environment} from 'environments/environment.dev';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/modals/reset-password/reset-password.component';
import { AddEditUserRolesComponent } from './components/modals/add-edit-user-roles/add-edit-user-roles.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { EditPermissionComponent } from './components/modals/edit-permission/edit-permission.component';
import { AddEditRoleComponent } from './components/modals/add-edit-role/add-edit-role.component';
import {MessageService} from "primeng/api";
const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        ResetPasswordComponent,
        AddEditUserRolesComponent,
        EditPermissionComponent,
        AddEditRoleComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),
        CoreModule,
        LayoutModule,
        StoreModule.forRoot(reducers, {}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatButtonModule,
        MatOptionModule,
        FormsModule,
        MatSelectModule,
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [MessageService]

})
export class AppModule
{
}
