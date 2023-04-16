import { Component, OnInit } from '@angular/core';
import {Todo} from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
todoT : Todo[] | any;
localItem:String | any;
  constructor() {
    
    this.localItem = localStorage.getItem("todoT");
    if(this.localItem == null){
      this.todoT = []
    }else{
      this.todoT = JSON.parse(this.localItem);
    }
    
   }

  ngOnInit(): void {
  }

  deleteTodo(todo: any){
    console.log(todo);
    const index = this.todoT.indexOf(todo);
    this.todoT.splice(index, 1);
    localStorage.setItem("todoT", JSON.stringify(this.todoT));
  }

  addTodo(todo :Todo){
    console.log(todo);
    this.todoT.push(todo);
    localStorage.setItem("todoT", JSON.stringify(this.todoT));
  }

  todoToggle(todo :Todo){
    const index = this.todoT.indexOf(todo);
    this.todoT[index].active = !this.todoT[index].active;
    localStorage.setItem("todoT", JSON.stringify(this.todoT));
  }
}
