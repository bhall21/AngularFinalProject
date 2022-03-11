import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listofTasks: Task[] = [];

  constructor(private myTaskService: TaskService) { }

  ngOnInit(): void {
    this.myTaskService.getAllTasks().subscribe(response =>{
      console.log(response);
      this.listofTasks = response;
    })
  }

  deleteTask(id: number) {
    this.myTaskService.deleteTask(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    })
  }

}
