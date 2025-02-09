import {Routes} from "@angular/router";
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {RoleGuard} from '../../auth/guard/role.guard';
import {canActivateAuthGuard} from 'kinde-angular';

export const ADMIN_ROUTES: Routes = [{path: '', component: AdminPageComponent, canActivate: [canActivateAuthGuard,RoleGuard]}];
