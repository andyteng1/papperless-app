import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortalSignComponent } from './client-portal-sign.component';

describe('ClientPortalSignComponent', () => {
  let component: ClientPortalSignComponent;
  let fixture: ComponentFixture<ClientPortalSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPortalSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortalSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
