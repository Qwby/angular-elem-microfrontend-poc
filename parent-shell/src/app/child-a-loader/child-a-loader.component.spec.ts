import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildALoaderComponent } from './child-a-loader.component';

describe('ChildALoaderComponent', () => {
  let component: ChildALoaderComponent;
  let fixture: ComponentFixture<ChildALoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildALoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildALoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
