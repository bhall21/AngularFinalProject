import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

newTask: Task = new Task();

  constructor(private myTaskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  createNewTask(){
   this.myTaskService.createTask(this.newTask).subscribe(response => {
     console.log(response);
     this.router.navigate(["tasks"]);
   })
  }

}
