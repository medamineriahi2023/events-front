import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot, UrlTree
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
    constructor(
        protected readonly router: Router,
        protected readonly keycloak: KeycloakService
    ) {
        super(router, keycloak);
    }

    public async isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean | UrlTree> {
        // Force the user to log in if currently unauthenticated.
        if (!this.authenticated) {
            await this.keycloak.login({
                redirectUri: window.location.origin + state.url
            });
            return false;
        }

        // Get the roles required from the route.
        const requiredRoles = route.data.roles;

        // Allow the user to proceed if all the required roles are present.
        const hasRequiredRoles = requiredRoles.every(role => this.roles.includes(role));
        if (!hasRequiredRoles) {
            return this.router.parseUrl('/unauthorized'); // Replace '/unauthorized' with the desired route for unauthorized access
        }

        return true;
    }
}
