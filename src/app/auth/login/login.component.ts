import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  isLogin: boolean = true;

  get user() {
    return this.form.get('user');
  }

  get password() {
    return this.form.get('password');
  }

  get userRequired() {
    return this.user.invalid && (this.user.dirty || this.user.touched);
  }

  get passwordRequired() {
    return (
      this.password.invalid && (this.password.dirty || this.password.touched)
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onLogin(status: boolean) {
    this.isLogin = status;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
