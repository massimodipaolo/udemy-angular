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

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', [Validators.required], [PasswordValidators.passwordCheck]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: PasswordValidators.passwordShouldMatch
    }
  );
  }

  get oldPassword() {return this.form.get('oldPassword'); }
  get newPassword() {return this.form.get('newPassword'); }
  get confirmPassword() {return this.form.get('confirmPassword'); }

  change() {
  }

}
