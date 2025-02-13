import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {KindeAngularService} from 'kinde-angular';
import {AsyncPipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatChip} from '@angular/material/chips';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatDrawerContainer, MatDrawer, MatSidenavModule, SidebarComponent, AsyncPipe, MatIcon, MatChip],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voffer-frontend';

  constructor(public kindeAuth:KindeAngularService) {
  }
}
