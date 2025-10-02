import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [
    CommonModule,        // *ngIf, *ngFor, etc
    ReactiveFormsModule, // Reactive Forms
    HttpClientModule     // Http requests
  ],
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {

  postCustomerForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]]
    });
  }

  postCustomer() {
    if (this.postCustomerForm.valid) {
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe({
        next: (res) => {
          console.log('Customer added successfully!', res);
          alert('Customer added successfully!');
          this.postCustomerForm.reset();

          // Go to the list of customers after successful addition
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error('Error adding customer:', err);
          alert('Failed to add customer. Please try again.');
        }
      });
    } else {
      console.warn('Form is invalid. Please fill in all required fields.');
      alert('Form is invalid. Please fill in all required fields.');
    }
  }
}
