import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortalPreviewComponent } from './client-portal-preview.component';

describe('ClientPortalPreviewComponent', () => {
  let component: ClientPortalPreviewComponent;
  let fixture: ComponentFixture<ClientPortalPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPortalPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
