import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStoreService } from '../service/data-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private dataStore: DataStoreService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifiedReq = req;
    if (this.dataStore.accessToken) {
      modifiedReq = req.clone({
        setHeaders: { Authorization: `Bearer ${this.dataStore.accessToken}` },
      });
    }
    return next.handle(modifiedReq);
  }
}
