import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  title = 'Todo Items';
  inputVal:string = ''
  inputVal2:string = ''

  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.todos = [
    //   {
    //     content: 'First Todo',
    //     completed: false,
    //   },
    //   {
    //     content: 'Second Todo',
    //     completed: true,
    //   },
    //   {
    //     content: 'Third Todo',
    //     completed: false,
    //   },
    // ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number){
   this.todos = this.todos.filter((v,i) => {
      return i !== id;
    })
  }

  addTodo(){
    this.todos.push({
      content: this.inputVal,
      completed: false
    })
    this.inputVal = ''
  }

  getVal2(val: string){
    this.inputVal2 = val
  }
  addTodo2(){
    this.todos.push({
      content: this.inputVal2,
      completed: false
    })
    this.inputVal2 = ''
  }
}
