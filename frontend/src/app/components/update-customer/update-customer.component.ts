import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {

  id!: number;
  customer: any = null;
  updateCustomerForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]]
    });

    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (!idParam) {
      console.error('No id param found in route');
      return;
    }

    const parsed = Number(idParam);
    if (isNaN(parsed)) {
      console.error('Invalid id param:', idParam);
      return;
    }

    this.id = parsed;
    this.getCustomerById();
  }

  getCustomerById(): void {
    this.service.getCustomerById(this.id).subscribe({
      next: (res) => {
        console.log('Customer fetched:', res);
        this.customer = res;

        this.updateCustomerForm.patchValue({
          name: res.name,
          email: res.email,
          phone: res.phone
        });
      },
      error: (err) => {
        console.error('Error fetching customer by id:', err);
      }
    });
  }

  updateCustomer() {
    this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe({
      next: (res) => {
        console.log('Customer updated successfully:', res);
        alert('Customer updated successfully');

        // Go to the list of customers after successful update
          this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating customer:', err);
        alert('Failed to update customer');
      }
    });
  }

}
