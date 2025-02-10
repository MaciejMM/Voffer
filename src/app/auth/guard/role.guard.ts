import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {KindeAngularService} from 'kinde-angular';

type Role = {
  id: string;
  key: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  private readonly ADMIN_ROLE = 'ADMIN';

  constructor(
    private readonly authService: KindeAngularService,
    private readonly router: Router
  ) {
  }

  async canActivate(): Promise<boolean> {
    const accessToken = await this.authService.getAccessToken();
    const decodedToken = this.decodeToken(accessToken);
    const roles = decodedToken.roles.map((role: Role) => role.key);
    if (roles.includes(this.ADMIN_ROLE)) {
      return true;
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
