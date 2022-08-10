import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTodoItems(itemId?: string) {
    return this.httpClient.get<Todo[]>(
      `${environment.base_url}/todos${itemId ? `/${itemId}` : ''}`
    );
  }
}
