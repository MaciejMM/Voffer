import {Component, inject, OnInit} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatNavList} from "@angular/material/list";
import {Router} from "@angular/router";
import {KindeAngularService} from 'kinde-angular';
import {TelerouteLoginDialogComponent} from '../teleroute-login-dialog/teleroute-login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';
import {Store} from '@ngrx/store';
import * as appSelectors from '../../../store/app/app.selectors';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatNavList,
    MatIcon,
    MatDivider,
    MatButton,
    AsyncPipe,
    MatAnchor,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  isTelerouteAuthenticated$: Observable<boolean>;

  constructor(private kindeAuthService: KindeAngularService, private route: Router,
              readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.isTelerouteAuthenticated$ = this.store.select(appSelectors.selectIsAuthenticatedToTeleroute);
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

  redirectToTranseuPage() {
    window.location.href = `https://auth.platform.trans.eu/oauth2/auth?client_id=${environment.transEuClientId}&response_type=code&state=random_number&redirect_uri=https://voffer-d18ce4ed1b53.herokuapp.com/`;
  }

}
