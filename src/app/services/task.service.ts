import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  createNewTask(newTask: Task) {
    throw new Error('Method not implemented.');
  }

taskURL: string = "http://localhost:3000/tasks"

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]>{
return this.http.get<Task[]>(this.taskURL)
  }

  getOneTask(reqID: number): Observable<Task>{
    return this.http.get<Task>(`${this.taskURL}/${reqID}`)
  }

  deleteTask(deleteID: number): Observable<any>{
  return this.http.delete<any>(`${this.taskURL}/${deleteID}`)  
  }

  createTask(newTask: Task): Observable<Task>{
  return this.http.post<Task>(this.taskURL, newTask)
  }
}
