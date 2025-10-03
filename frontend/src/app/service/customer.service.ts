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

  // POST - create new customer //
  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${BASE_URL}/api/customer`, customer);
  }

  // GET - all customers //
  getAllCustomer(): Observable<any> {
    return this.http.get(BASE_URL + "/api/customers");
  }

  // GET by ID //
  getCustomerById(id: number): Observable<any> {
    return this.http.get(BASE_URL + "/api/customer/" + id);
  }

   // UPDATE - by ID //
  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put(BASE_URL + "/api/customer/" + id, customer);
  }

  // DELETE - by ID //
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(BASE_URL + "/api/customer/" + id);
  }
}
