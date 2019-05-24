import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatakanComponent } from './datakan.component';

describe('DatakanComponent', () => {
  let component: DatakanComponent;
  let fixture: ComponentFixture<DatakanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatakanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
