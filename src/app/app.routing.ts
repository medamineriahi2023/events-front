import {Route} from '@angular/router';
import {LayoutComponent} from 'app/layout/layout.component';
import {InitialDataResolver} from 'app/app.resolvers';
import {AuthGuard} from "./core/auth/kc-config/authGuard";

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'operations'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'zone'},

    // Auth routes for guests

    // Auth routes for authenticated users

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        data: {
            layout: 'modern'
        },
        children: [
            {path: 'security', loadChildren: () => import('app/modules/admin/security/security.module').then(m => m.SecurityModule)},
            {path: 'operations', loadChildren: () => import('app/modules/admin/operations/operations.module').then(m => m.OperationsModule)},
            {path: 'events', loadChildren: () => import('app/modules/admin/events/events.module').then(m => m.EventsModule)},
            {path: 'admin-events', loadChildren: () => import('app/modules/participant/events/events.module').then(m => m.EventsModule)},
            {path: 'organizer-events', loadChildren: () => import('app/modules/organizer/events/events.module').then(m => m.EventsModule)},
            {path: 'unauthorized', loadChildren: () => import('app/modules/admin/UnauthorizedPage/unauthorized.module').then(m => m.UnauthorizedModule)},
            {path: 'publications', loadChildren: () => import('app/modules/participant/publications/publications.module').then(m => m.PublicationsModule)},

        ]

    }
];
