import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Directive({
  selector: '[customValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }
  ]
})
export class CustomValidatorDirective implements Validator {

  @Input('customValidator') validatorName!: keyof typeof CustomValidators;

  validate(control: AbstractControl): ValidationErrors | null {

    const validatorFunction = CustomValidators[this.validatorName] as (control: AbstractControl) => ValidationErrors | null;

    if (typeof validatorFunction === 'function') {
      return validatorFunction(control);
    }
    return null;
  }
}
