import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { Task } from 'src/app/core/models/task';
import { HttpService } from 'src/app/core/services/api/http.service';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import {CdkDragDrop, CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatChipsModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag
  ],
  styleUrls: ['./task.component.css'],
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  tasksList$: Observable<Task[] | any>;
  todo: Task[] = [];
  inProgress: Task[] = [];
  inReview: Task[] = [];
  done: Task[] = [];

  constructor(private srv: HttpService) {
    this.tasksList$ = this.srv.tasksList$;
  }

  ngOnInit(): void {
    this.srv.getAllTasks();
    this.divideTasksByStatus();
  }

  divideTasksByStatus() {
    this.tasksList$.subscribe((tasks) => {
      tasks.forEach((task: Task) => {
        switch (task.status) {
          case 'todo':
            this.todo.push(task);
            this.sortByOrder(this.todo)
            break;
          case 'inProgress':
            this.inProgress.push(task);
            this.sortByOrder(this.inProgress)
            break;
          case 'inReview':
            this.inReview.push(task);
            this.sortByOrder(this.inReview)
            break;
          case 'done':
            this.done.push(task);
            this.sortByOrder(this.done)
            break;
          default:
            break;
        }
      });
    });
  }

  sortByOrder(tasks: Task[]): Task[] {
    // order the tasks in column based on their order property
    return tasks.sort((a, b) => a.order - b.order);
  }

  drop(event: CdkDragDrop<Task[]>) {
    const containerTasks = event.container.data;
    const containerId = event.container.id;
    const movedTask = event.item.data as Task;

    if (event.previousContainer === event.container) {
      // 1- move within the same column
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

       this.updateOrder(containerTasks);
    } else {
      // 2- move between columns
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.updateStatus(movedTask, containerId);
      this.updateOrder(containerTasks);
    }
  }

  updateStatus(task: Task, containerId: string) {
     // map container's ID to the status
     const statusMapping: { [id: string]: string } = {
       'cdk-drop-list-0': 'todo',
       'cdk-drop-list-1': 'inProgress',
       'cdk-drop-list-2': 'inReview',
       'cdk-drop-list-3': 'done'
     };

     if (statusMapping[containerId]) {
      task.status = statusMapping[containerId];
       this.srv.updateTask(task.id, task).subscribe();
     }
  }

  updateOrder(tasks: Task[]) {
    // update the order property of tasks based on their index position in the container
    tasks.forEach((task, index) => {
      task.order = index;
      this.srv.updateTask(task.id, task).subscribe();
  });
 }

}
