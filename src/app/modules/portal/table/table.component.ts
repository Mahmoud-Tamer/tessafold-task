import { TodoService } from '../../../core/services/todo.service';
import { Component } from '@angular/core';
import { Todo } from 'src/app/core/interfaces/todo.model';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  $listOfData!: Observable<Todo[]>;
  $filteredTodos!: Observable<Todo[]>;
  public searchField!: FormControl;
  todosListLength: number = 0;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.getAllTodoListData();
    this.searchField = new FormControl('');
    this.filterTodoList();
  }

  getAllTodoListData(): void {
    this.$listOfData = this.todoService.getTodoItems();
  }

  filterTodoList() {
    const $searchTerm = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );

    this.$filteredTodos = combineLatest([this.$listOfData, $searchTerm]).pipe(
      map(([todos, searchTerm]) => {
        const filteredTodos = todos.filter(
          (todo) =>
            searchTerm === '' ||
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.todosListLength = filteredTodos?.length || 0;
        return filteredTodos;
      })
    );
  }

  goToDetails(todoId: string) {
    this.router.navigate([`portal/details/${todoId}`]);
  }
}
