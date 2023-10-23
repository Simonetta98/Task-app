import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      team works!
    </p>
  `,
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

}
