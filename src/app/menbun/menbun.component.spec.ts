import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenbunComponent } from './menbun.component';

describe('MenbunComponent', () => {
  let component: MenbunComponent;
  let fixture: ComponentFixture<MenbunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenbunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenbunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
