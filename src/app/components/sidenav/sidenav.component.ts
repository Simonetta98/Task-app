import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, CommonModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, NavbarComponent, MatButtonModule],
  template: `
<mat-sidenav-container>
  <mat-sidenav #sidenav mode="side" [opened]="sidenavOpen">
    <div class="title-box">
      <h2 class="violet">Task.<span class="white">app</span></h2>
    </div>
  <mat-card> <!-- User card -->
  <div class="rounded">
  <img class="rounded" mat-card-image src="../../assets/images/cat.png" alt="Sample Image">
  </div>
  <mat-card-header>
    <mat-card-title>Welcome,</mat-card-title>
    <mat-card-subtitle>Jane Doe</mat-card-subtitle>
  </mat-card-header>
</mat-card>
  <mat-nav-list>
     <h5>MAIN</h5>
     <!-- Divider -->
     <mat-divider></mat-divider>
      <a mat-list-item routerLink="/tasks">
      <div class="flex-center">
        <mat-icon>edit_calendar</mat-icon>
        <span> Tasks</span>
      </div>
      </a>
      <a mat-list-item routerLink="/team">
      <div class="flex-center">
        <mat-icon>groups</mat-icon>
        <span> Team</span>
      </div>
      </a>
      <a mat-list-item routerLink="/page3">
      <div class="flex-center">
        <mat-icon>history</mat-icon>
        <span> Archive</span>
      </div>
      </a>
      <h5>OTHERS</h5>
      <!-- Divider -->
      <mat-divider></mat-divider>
      <a mat-list-item routerLink="/profile">
      <div class="flex-center">
        <mat-icon>settings</mat-icon>
        <span> Settings</span>
      </div>
      </a>
      <a mat-list-item routerLink="/page6">
      <div class="flex-center">
        <mat-icon>support_agent</mat-icon>
        <span> Support</span>
      </div>
      </a>
    </mat-nav-list>
    <!-- Logout button -->
  <button mat-stroked-button color="warn" class="logout-button">
  <mat-icon class="logout-icon">logout</mat-icon>
        <span> Logout</span>
  </button>
  </mat-sidenav>
  <mat-sidenav-content>
    <app-navbar (toggleSidenavClick)="handleSidenavToggle($event)"></app-navbar>
    <div class="main-container">
    <router-outlet></router-outlet>
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
