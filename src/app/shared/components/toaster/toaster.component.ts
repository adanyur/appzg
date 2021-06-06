import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { ToasterService } from '../../../core/services';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit {
  constructor(private _ToasterService: ToasterService) {}

  toasts = [];
  toasts$: Observable<any>;

  ngOnInit(): void {
    this.toasts$ = this._ToasterService.toaster$.pipe(
      map((value) => (this.toasts = [value, ...this.toasts])),
      tap((_) => this.setTime())
    );
  }

  setTime() {
    setTimeout(() => this.toasts.pop(), 3000);
  }
}
