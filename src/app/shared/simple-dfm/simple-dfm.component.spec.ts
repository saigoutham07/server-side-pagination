import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDfmComponent } from './simple-dfm.component';

describe('SimpleDfmComponent', () => {
  let component: SimpleDfmComponent;
  let fixture: ComponentFixture<SimpleDfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
