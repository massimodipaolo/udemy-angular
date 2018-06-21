import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder} from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @Output('send') send = new EventEmitter<SignupComponentEvent>();

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email], [UsernameValidators.uniqueEmail]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), UsernameValidators.cannotContainSpace ]),
    nested: new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email], [UsernameValidators.uniqueEmail]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), UsernameValidators.cannotContainSpace ]),
    })
  });
  busy = false;

  get username() {return this.form.get('username'); }
  get password() {return this.form.get('password'); }

  get nestedUsername() {return this.form.get('nested.username'); }
  get nestedPassword() {return this.form.get('nested.password'); }

  login() {
    this.busy = true;

    setTimeout(() => {
      let user: User;
      let errors: ValidationErrors;
      const isValid = this.username.value === 'massimo@gmail' && this.password.value === '123456';  // authService.login(this.form.value);
      if (!isValid) {
        errors = { invalidLogin: true };
        this.form.setErrors(errors);
      } else {
        user = new User('Massimo', 'Di Paolo', this.username.value);
      }
      this.send.emit(new SignupComponentEvent(user, errors));
      this.busy = false;
    }
    , 2000);
  }

  constructor(fb: FormBuilder) {
    // Using FormBuilder
    this.form = fb.group({
      username: ['', [Validators.required, Validators.email], [UsernameValidators.uniqueEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      nested: fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]],
      })
    });
  }

}

export class User {
  constructor(public firstName?: string, public lastName?: string, public email?: string) {}
}

export class SignupComponentEvent {
  constructor(public user?: User, public errors?: ValidationErrors) {}
}
