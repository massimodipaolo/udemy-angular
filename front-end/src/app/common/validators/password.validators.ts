import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {

  static check(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '1234') {
          resolve({check: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static equal(oldValue: string, newValue: string): ValidationErrors | null {
    if (oldValue !== newValue) {
      return { equal: true};
    }
    return null;
  }

}
