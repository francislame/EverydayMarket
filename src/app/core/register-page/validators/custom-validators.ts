import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  // NAME
  static namePattern(control: AbstractControl): ValidationErrors | null {
    const namePattern = /^[a-zA-Z\s]+$/;
    return !namePattern.test(control.value) ? { 'namePattern': true } : null;
  }

  // PHONE NUMBER
  static phoneNumber(control: AbstractControl): ValidationErrors | null {
    const phonePattern = /^\d{10}$/;
    return !phonePattern.test(control.value) ? { 'phoneNumber': true } : null;
  }

  // PROVINCE SELECTION
  static provinceSelection(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { 'provinceRequired': true };
  }

  // COUNTRY
  static countrySelection(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { 'countryRequired': true };
  }
}
