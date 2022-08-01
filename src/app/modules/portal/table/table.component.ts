import { TodoService } from '../../../core/services/todo.service';
import { Component } from '@angular/core';
import { Todo } from 'src/app/core/interfaces/todo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  $listOfData!: Observable<Todo[]>;
  $allData!: Observable<Todo[]>;

  filterTimeOut: any;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.getAllTodoListData();
  }

  getAllTodoListData(): void {
    this.$listOfData = this.todoService.getTodoItems();
    this.$allData = this.$listOfData;
  }

  search(event: any) {
    if (this.filterTimeOut) {
      clearTimeout(this.filterTimeOut);
    }

    this.filterTimeOut = setTimeout(() => {
      this.$listOfData = this.filterListOfData(
        this.$allData,
        event.target.value
      );
    }, 250);
  }

  filterListOfData(
    listOfData: Observable<Todo[]>,
    keyword: string
  ): Observable<Todo[]> {
    return listOfData.pipe(
      map((todos: Todo[]) =>
        todos.filter((todo: Todo) => todo.title.includes(keyword))
      )
    );
  }

  goToDetails(todoId: string) {
    this.router.navigate([`portal/details/${todoId}`]);
  }
}
