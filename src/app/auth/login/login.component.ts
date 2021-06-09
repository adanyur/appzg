import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services';
import { StorageService, MessagesModalService } from '../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private _StorageService: StorageService,
    private _MessagesModalService: MessagesModalService,
    private _Router: Router
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

  get touched() {
    return this.user.dirty || this.user.touched;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this._AuthService.postLogin(this.form.value).subscribe((data: any) => {
      if (data) {
        this._StorageService.setData(data);
        this._MessagesModalService.messageSucces();
        this._Router.navigate(['modulos']);
      }
    });
  }
}
