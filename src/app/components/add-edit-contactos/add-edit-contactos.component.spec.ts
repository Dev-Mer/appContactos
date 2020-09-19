import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContactosComponent } from './add-edit-contactos.component';

describe('AddEditContactosComponent', () => {
  let component: AddEditContactosComponent;
  let fixture: ComponentFixture<AddEditContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
