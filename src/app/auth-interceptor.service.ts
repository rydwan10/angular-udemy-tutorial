import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request on the way');
    console.log(req.url);
    const modifiedReqest = req.clone({
      headers: req.headers.append('Auth', 'fromInterceptor'),
    });

    return next.handle(modifiedReqest);
  }
}
