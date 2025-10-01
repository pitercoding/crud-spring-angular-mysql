import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCustomers } from './get-all-customers';

describe('GetAllCustomers', () => {
  let component: GetAllCustomers;
  let fixture: ComponentFixture<GetAllCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllCustomers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllCustomers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
