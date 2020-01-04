import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateordeleteComponent } from './updateordelete.component';

describe('UpdateordeleteComponent', () => {
  let component: UpdateordeleteComponent;
  let fixture: ComponentFixture<UpdateordeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateordeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateordeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
