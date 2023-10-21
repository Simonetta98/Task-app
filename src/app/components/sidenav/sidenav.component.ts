import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, NavbarComponent],
  template: `
<mat-sidenav-container>
  <mat-sidenav #sidenav mode="side" [opened]="sidenavOpen">
  </mat-sidenav>
  <mat-sidenav-content>
    <app-navbar (toggleSidenavClick)="handleSidenavToggle($event)"></app-navbar>
    <div class="main-container">
    <p>Main content</p>
    </div>
  </mat-sidenav-content>
</mat-sidenav-container>
  `,
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidenavOpen: boolean = true;

  handleSidenavToggle(isOpen: boolean) {
    this.sidenavOpen = isOpen;
  }
}
