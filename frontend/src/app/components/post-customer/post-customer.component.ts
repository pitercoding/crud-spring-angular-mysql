import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [
    ReactiveFormsModule,  // Reactive Forms module
    HttpClientModule      // HttpClient module for API requests
  ],
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {

  // Form group to hold customer form data
  postCustomerForm!: FormGroup;

  constructor(
    private customerService: CustomerService, // service to handle HTTP requests
    private fb: FormBuilder                   // form builder for reactive forms
  ) {}

  // Initialize the form when the component loads
  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]]
    });
  }

  // Method to submit customer data to the backend
  postCustomer() {
    if (this.postCustomerForm.valid) {
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe({
        next: (res) => {
          console.log('Customer added successfully!', res);
          alert('Customer added successfully!');  // show a message to the user
          this.postCustomerForm.reset();          // reset the form after submission
        },
        error: (err) => {
          console.error('Error adding customer:', err);
          alert('Failed to add customer. Please try again.'); // show error message
        }
      });
    } else {
      console.warn('Form is invalid. Please fill in all required fields.');
      alert('Form is invalid. Please fill in all required fields.');
    }
  }
}
