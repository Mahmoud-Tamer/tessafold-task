import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../../core/services/todo.service';
import { Todo } from 'src/app/core/interfaces/todo.model';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  todoDetails!: Todo;

  constructor(
    private todoService: TodoService,
    public route: ActivatedRoute,
    private location: Location
  ) {
    this.getTodoDetails(route.snapshot.params['id']);
  }

  getTodoDetails(todoId: string): void {
    this.todoService.getTodoItems(todoId).subscribe((todo: any) => {
      this.todoDetails = todo;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
