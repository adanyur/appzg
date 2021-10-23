import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-nav></app-nav><router-outlet></router-outlet>`,
  styles: [''],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
