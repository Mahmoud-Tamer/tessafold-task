import { RouterModule } from '@angular/router';
import { Todo } from 'src/app/core/interfaces/todo.model';
import { TodoService } from './../../../core/services/todo.service';
import {
  ComponentFixture,
  inject,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if there one todo item', inject(
    [TodoService],
    (todoService: any) => {
      todoService
        .getTodoItems(component.route.snapshot.params['id'])
        .subscribe((todo: Todo[]) => expect(todo.length).toEqual(1));
    }
  ));
});
