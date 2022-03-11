import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
{path: "tasks", component:TasksComponent },
{path: "tasks/:id", component:TaskComponent },
{path: "create", component:CreateTaskComponent },
{path: "", redirectTo: "tasks", pathMatch: "full" },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
