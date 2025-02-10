import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatNavList} from "@angular/material/list";
import {Router, RouterLinkActive} from "@angular/router";
import {KindeAngularService} from 'kinde-angular';
import {TelerouteLoginDialogComponent} from '../teleroute-login-dialog/teleroute-login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatNavList,
    RouterLinkActive,
    MatIcon,
    MatDivider,
    MatButton
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly dialog = inject(MatDialog);

  constructor(private kindeAuthService: KindeAngularService, private cdr: ChangeDetectorRef, private route: Router) {
  }

  logout() {
    this.kindeAuthService.logout();
  }
  navigatePage(page: string) {
    this.route.navigate([`/${page}`]);
  }

  openTelerouteLoginDialog() {
    this.dialog.open(TelerouteLoginDialogComponent);
  }

}
