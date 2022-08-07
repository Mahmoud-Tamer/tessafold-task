import { RouterModule } from '@angular/router';
import { Todo } from 'src/app/core/interfaces/todo.model';
import {
  ComponentFixture,
  inject,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { TodoService } from 'src/app/core/services/todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('retrieves all todos', inject([TodoService], (todoService: any) => {
    todoService
      .getTodoItems()
      .subscribe((todo: Todo[]) => expect(todo.length).toBeGreaterThan(0));
  }));
});
