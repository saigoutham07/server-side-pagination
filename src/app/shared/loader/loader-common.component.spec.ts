import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCommonComponent } from './loader-common.component';

describe('LoaderCommonComponent', () => {
  let component: LoaderCommonComponent;
  let fixture: ComponentFixture<LoaderCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
