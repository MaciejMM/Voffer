import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    private readonly SUPER_ADMIN = 'ROLE_SUPER_ADMIN';
    private readonly ADMIN = 'ROLE_ADMIN';
    constructor(private readonly authService: AuthService,
                private readonly router: Router) {
    }

    canActivate(): boolean {
        const token = this.authService.getToken();
        if (token) {
            const decodedToken = this.decodeToken(token);
            const roles = decodedToken.roles.map((role: { authority: string }) => role.authority);
            if (roles.includes(this.SUPER_ADMIN) || roles.includes(this.ADMIN)) {
                return true;
            }
        }
        this.router.navigate(['/page-not-found']);
        return false;
    }

    private decodeToken(token: string): any {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            console.error('Invalid token:', e);
            return null;
        }
    }
}
