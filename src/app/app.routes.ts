import { Routes } from "@angular/router";
import { TaskComponent } from "./pages/task/task.component";
import { TeamComponent } from "./pages/team/team.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const ROUTES: Routes = [
  {
    path: 'tasks',
    component: TaskComponent,
    title: 'Tasks Page'
  },
  {
    path: 'team',
    component: TeamComponent,
    title: 'Team Page'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile Settings Page'
  }
];

export default ROUTES
