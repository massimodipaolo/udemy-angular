import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;

  get newPassword() {return this.form.get('newPassword').value; }
  get confirmPassword() {return this.form.get('confirmPassword').value; }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', [Validators.required], [PasswordValidators.check]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, PasswordValidators.equal(this.newPassword, this.confirmPassword)]]
    });
  }

  change() {
  }

}
