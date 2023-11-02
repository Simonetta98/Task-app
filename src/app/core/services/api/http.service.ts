import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../../models/team';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _teamSubject = new BehaviorSubject<Team[]>([]);
  teamsList$ = this._teamSubject.asObservable();

  private _tasksSubject = new BehaviorSubject<Task[]>([]);
  tasksList$ = this._tasksSubject.asObservable();

  URL_team = "http://localhost:3000/team";
  URL_tasks = "http://localhost:3000/tasks";
;

  constructor(private http: HttpClient) { }

  //GET
  public getAllTeams() {
    return this.http.get<Team[]>(this.URL_team)
           .subscribe(data=> this._teamSubject.next(data));
  };

  public getAllTasks() {
    return this.http.get<Task[]>(this.URL_tasks)
           .subscribe(data=> this._tasksSubject.next(data));
  };

  //PUT
  public updateTask(id: number, task: Task): Observable<any>{
    return this.http.put<any>(`${this.URL_tasks}/${id}`, task);
  };

}
