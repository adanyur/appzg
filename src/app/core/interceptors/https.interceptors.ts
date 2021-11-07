import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { StorageService } from '../services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpsInterceptor implements HttpInterceptor {
  constructor(private StorageService: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.StorageService.token;

    if (token) {
      const headers = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
      return next.handle(headers);
    }

    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = req.clone({
      setHeaders: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + credenciales,
      },
    });

    return next.handle(httpHeaders);
  }
}
