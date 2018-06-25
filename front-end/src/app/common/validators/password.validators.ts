import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {

  static passwordCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({passwordCheck: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static passwordShouldMatch(control: AbstractControl) {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    if (newPassword.value !== confirmPassword.value) {
      return { passwordShouldMatch: true };
    }
    return null;
  }

}
