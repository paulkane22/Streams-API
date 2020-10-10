import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface TodoElement {
  what: string;
  position: number;
  priority: number;
  how: string;
}


const ELEMENT_DATA: TodoElement[] = [
  {position: 1, what: 'TODO', priority: 1, how: 'how'},
  {position: 2, what: 'TODO 2', priority: 1, how: 'how'},
  {position: 3, what: 'Create workstream 1', priority: 1, how: 'how'},
  {position: 4, what: 'Create workstream 2', priority: 1, how: 'how'},
  {position: 5, what: 'Create workstream 4' , priority: 1, how: 'how'},
  {position: 6, what: 'Create workstream 5', priority: 1, how: 'how'},
  {position: 7, what: 'Create workstream 6', priority: 1, how: 'how'},
  {position: 8, what: 'Create workstream 7', priority: 1, how: 'how'},
  {position: 9, what: 'Create workstream 8' , priority: 1, how: 'how'},
  {position: 10, what: 'Create workstream 9', priority: 1, how: 'how'}
];


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'what', 'priority', 'how'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
