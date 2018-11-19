import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmPortalPreviewComponent } from './rm-portal-preview.component';

describe('RmPortalPreviewComponent', () => {
  let component: RmPortalPreviewComponent;
  let fixture: ComponentFixture<RmPortalPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmPortalPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmPortalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
