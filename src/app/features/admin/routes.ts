import {Routes} from "@angular/router";
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {AuthGuard} from '../../auth/guard/auth.guard';
import {RoleGuard} from '../../auth/guard/role.guard';

export const ADMIN_ROUTES: Routes = [{path: '', component: AdminPageComponent, canActivate: [AuthGuard, RoleGuard]}];
