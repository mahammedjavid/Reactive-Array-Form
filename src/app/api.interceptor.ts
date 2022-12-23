import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private apiService: ApiService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({ headers: new HttpHeaders({ "app-id": "63a2980f2f9ed3ac5f149b52" }) })
    // console.log(newRequest)
    return next.handle(newRequest);
  }
}
