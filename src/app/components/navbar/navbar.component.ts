import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, SidenavComponent],
  template: `
<mat-toolbar color="primary">
  <button mat-icon-button (click)="toggleSidenav()">
    <mat-icon>menu</mat-icon>
  </button>
  <h1>My Tasks</h1>
</mat-toolbar>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidenavClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen: boolean = true;

  toggleSidenav() {
    this.isOpen = !this.isOpen
    this.toggleSidenavClick.emit(this.isOpen);
  }

}
