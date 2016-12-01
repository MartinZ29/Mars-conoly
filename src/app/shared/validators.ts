import { ValidatorFn, AbstractControl } from '@angular/forms';

export const cantBe = (value: string): ValidatorFn => {
  return (control: AbstractControl): {[Key: string]: any} => {
    return control.value === value ? {'cant be value': {value}} : null;
  };
}

export const tooOld = (value: number): ValidatorFn => {
  return (control: AbstractControl): {[Key: string]: any} => {
    return control.value > 130 ? {'too old': {value}} : null;
  }
}