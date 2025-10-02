import { Routes } from '@angular/router';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';

export const routes: Routes = [
  { path: 'customer', component: PostCustomerComponent },
  { path: '', redirectTo: 'customer', pathMatch: 'full' } // redirect root to /customer
];
