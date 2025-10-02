import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:8080";  // URL of the backend server

@Injectable({
  providedIn: 'root'  // global service
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  // To send customer data as a POST method request to the backend
  postCustomer(customer: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/customer`, customer);
  }

}
