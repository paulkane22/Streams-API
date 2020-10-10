import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { TasksModule } from 'src/app/tasks/tasks.module';


export interface ITask {
    id: number;
    title: string;
    description: string;
    priority: number;
    last_updated: string;
    active: boolean;
    status: string;
    complete: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasks: ITask[]  = [
    {id: 1, title: 'Task 1', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    {id: 2, title: 'Task 2', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    {id: 3, title: 'Task 3', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    {id: 4, title: 'Task 4', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    {id: 5, title: 'Task 5', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
   
    // {id: 21, title: 'Task 1', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 22, title: 'Task 2', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 23, title: 'Task 3', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 24, title: 'Task 4', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 25, title: 'Task 5', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
   
    // {id: 11, title: 'Task 1', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 12, title: 'Task 2', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 13, title: 'Task 3', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 14, title: 'Task 4', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 15, title: 'Task 5', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
   
    // {id: 31, title: 'Task 1', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 32, title: 'Task 2', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 33, title: 'Task 3', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 34, title: 'Task 4', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
    // {id: 35, title: 'Task 5', description: 'Create a task list', priority: 1, last_updated: '01/01/2020', active: false, status: 'Not Started', complete: false},
   
  ];

  constructor() { }

  getTasks(): ITask[]
  {
    return this.tasks;
  }


  getTask(id: number): ITask
  {
    return this.tasks[id];
  }

  addTask(task: ITask): void
  {
    this.tasks.push({
      id: 0,
      title: task.title,
      description: task.description,
      priority: task.priority,
      last_updated: task.last_updated,
      active: task.active,
      status: task.status,
      complete: task.complete
    });
  }

  removeTask(task: ITask): void {
    this.tasks = this.tasks.filter(function(obj) {
      return obj.id !== task.id;
  });

  }


  }
