import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  currentTask: Task = new Task();

  ID: number
  router: any;

  constructor(private actRoute: ActivatedRoute, private myTaskService: TaskService) { }

  ngOnInit() {
    this.ID = parseInt(this.actRoute.snapshot.paramMap.get("id"));
    console.log(this.ID);

    this.myTaskService.getOneTask(this.ID).subscribe(response => {
      this.currentTask = response;

    })

  }

  

}
