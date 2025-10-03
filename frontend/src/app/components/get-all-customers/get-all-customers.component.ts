import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Customer } from '../../service/customer';

@Component({
  selector: 'app-get-all-customers',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomer().subscribe({
      next: (res) => {
        console.log(res);
        this.customers = res;
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: () => {
        console.log(`Customer ${id} deleted`);
        this.getAllCustomers();  // refresh list
      },
      error: (err) => {
        console.error('Error deleting customer:', err);
      }
    });
  }
}
