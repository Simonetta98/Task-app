import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    NavbarComponent,
    MatButtonModule,
    MatInputModule, MatFormFieldModule],
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
     <mat-divider></mat-divider>  <!-- Divider -->
      <a mat-list-item routerLink="/tasks" routerLinkActive="active">
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
      <mat-divider></mat-divider> <!-- Divider -->
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
    <!-- Action card -->
    <mat-card class="action-card">
  <mat-card-header class="data-header">
    <mat-card-title>May</mat-card-title>
    <mat-card-subtitle>Today is Saturday, Jul 9th, 2023</mat-card-subtitle>
  </mat-card-header>
  <mat-divider class="action-divider" [vertical]="true"></mat-divider> <!-- Divider -->
  <mat-card-header class="total-header">
    <mat-card-title>0</mat-card-title>
    <mat-card-subtitle>You have created 0 tasks </mat-card-subtitle>
  </mat-card-header>
 <mat-divider class="action-divider" [vertical]="true"></mat-divider> <!-- Divider -->
  <mat-card-actions>
   <button mat-stroked-button color="accent" class="filter-button"> <mat-icon>filter_list</mat-icon> Filters</button>
   <button mat-raised-button color="accent"> <mat-icon>add</mat-icon> Create new</button>
</mat-card-actions>
</mat-card>
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
