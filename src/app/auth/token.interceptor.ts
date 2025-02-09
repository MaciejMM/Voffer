import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {from, mergeMap, Observable} from 'rxjs';
import {KindeAngularService} from 'kinde-angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(readonly auth: KindeAngularService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.auth.getAccessToken()).pipe(
      mergeMap(token => {
        if (token) {
          const headers = req.headers.set('Authorization', `Bearer ${token}`);
          req = req.clone({ headers });
        }
        return next.handle(req);
      })
    );
  }


}
