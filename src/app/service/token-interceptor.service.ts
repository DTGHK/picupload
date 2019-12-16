import { Injectable, Injector  } from '@angular/core';
import {  HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector ) { }

  intercept(req,next){
    let tokenizedReq = req.clone({
      setHeaders: {
        'rc-token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWJPcmdJZCI6MSwicm9sZXMiOlsiQVBQX0FETUlOIiwiQ09NTVVOSVRZX0FETUlOIiwiQU9JX0FETUlOIiwiVVNFUiIsIlNNRSIsIkJST0FEQ0FTVEVSIl0sInVzZXJFeHRlcm5hbElkIjoiMTEiLCJleHAiOjE1NzY1NjI5NDcsInVzZXJJZCI6MTEsImlhdCI6MTU3NjQ3NjU0Nywib3JnSWQiOjF9.ySD5RHEzfymgO3q-yKDmN_l6WO9rOBI5AlLzvxlIUb6YVqSIEtKKE0VYnB3G_Kf45Y_xMujyL4tPgyG7aCj2-g'
      }
    })
    return next.handle(tokenizedReq)
  }
}
