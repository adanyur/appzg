import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  subject: BehaviorSubject<any>;
  toaster$: Observable<any>;

  constructor() {
    this.subject = new BehaviorSubject<string>(null);
    this.toaster$ = this.subject
      .asObservable()
      .pipe(filter((value) => value !== null));
  }

  toaster(type: any, title?: string, body?: string, delay?: number) {
    this.subject.next({ type, title, body, delay });
  }
}
