import { Routes } from "@angular/router";
import { TaskComponent } from "./pages/task/task.component";

const ROUTES: Routes = [
  {
    path: '',
    component: TaskComponent,
    title: 'Tasks Page'
  }
];

export default ROUTES
