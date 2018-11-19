import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmPortalComponent } from './rm-portal.component';

describe('RmPortalComponent', () => {
  let component: RmPortalComponent;
  let fixture: ComponentFixture<RmPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
