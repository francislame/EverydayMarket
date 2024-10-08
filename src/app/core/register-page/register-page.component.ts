import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomValidators } from '../register-page/validators/custom-validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  model = {
    name: '',
    email: '',
    phone: '',
    birthday: '',
    street: '',
    province: '',
    country: '',
    termsAccepted: false,
  };

  provinces = [
    'Manitoba',
    'Ontario',
    'Saskatchewan',
    'Yukon',
    'Nova Scotia',
    'British Columbia',
    'Newfoundland and Labrador',
    'Alberta',
    'New Brunswick',
    'Northwest Territories',
    'Quebec',
    'Prince Edward Island',
    'Nunavut',
  ];

  constructor(private router: Router) { }

  onSubmit() {
    if (this.model.country === 'Canada') {
      this.router.navigate(['/products']);
    }
  }

  checkCountry() {
  }
}
