import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

const BASE_URL = "http://localhost:8080";  // URL of the backend server

@Injectable({
  providedIn: 'root'  // service available globally
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  // To send customer data as a POST request to the backend
  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${BASE_URL}/api/customer`, customer);
  }

  // To get customers data from backend
  getAllCustomer(): Observable<any> {
    return this.http.get(BASE_URL + "/api/customers");
  }

  // To get customers by id from backend
  getCustomerById(id: number): Observable<any> {
    return this.http.get(BASE_URL + "/api/customer/" + id);
  }
}
