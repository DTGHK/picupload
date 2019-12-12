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
        'rc-token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWJPcmdJZCI6MSwicm9sZXMiOlsiQVBQX0FETUlOIiwiQ09NTVVOSVRZX0FETUlOIiwiQU9JX0FETUlOIiwiVVNFUiIsIlNNRSIsIkJST0FEQ0FTVEVSIl0sInVzZXJFeHRlcm5hbElkIjoiMTEiLCJleHAiOjE1NzYyMTg4OTQsInVzZXJJZCI6MTEsImlhdCI6MTU3NjEzMjQ5NCwib3JnSWQiOjF9.zh6YwG1kWzsDdUqz7bB-Gx9JOOkLk58Tt_TrmYHezYT_MmJxCEG6WwUpVQ4K6nGlCBItm5sLl4obeQ_FVjCVfw'
      }
    })
    return next.handle(tokenizedReq)
  }
}
