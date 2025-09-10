import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientForm } from './client-form';

describe('ClientForm', () => {
  let component: ClientForm;
  let fixture: ComponentFixture<ClientForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
