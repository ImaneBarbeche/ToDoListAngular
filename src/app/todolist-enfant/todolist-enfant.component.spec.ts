import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistEnfantComponent } from './todolist-enfant.component';

describe('TodolistEnfantComponent', () => {
  let component: TodolistEnfantComponent;
  let fixture: ComponentFixture<TodolistEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolistEnfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
