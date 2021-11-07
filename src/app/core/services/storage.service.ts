import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setData({ nombre, access_token, expires_in, token_type }) {
    localStorage.setItem('user', nombre);
    localStorage.setItem('token', `${token_type} ${access_token}`);
    localStorage.setItem('expire', expires_in);
  }

  get userName() {
    return localStorage.getItem('user');
  }

  get token() {
    return localStorage.getItem('token');
  }

  clearLocalstorage() {
    localStorage.clear();
  }
}
