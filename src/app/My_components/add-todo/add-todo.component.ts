import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title:string | any;
  desc:string | any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno : 1,
      title : this.title,
      desc : this.desc,
      active : true
    }

    this.todoAdd.emit(todo);
  }
}
