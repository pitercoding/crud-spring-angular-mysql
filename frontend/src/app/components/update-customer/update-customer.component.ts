import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';

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
    private fb: FormBuilder
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
}
