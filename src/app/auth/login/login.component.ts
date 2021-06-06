import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services';
import { StorageService } from '../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private _StorageService: StorageService
  ) {}
  form: FormGroup;

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

  onSubmit() {
    this._AuthService.postLogin(this.form.value).subscribe((data: any) => {
      this._StorageService.setData(data);
    });
  }
}
