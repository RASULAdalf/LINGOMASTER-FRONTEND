import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const loadingService = inject(LoadingService);
  loadingService.progrssBarLoadingState.next(true);

  return next(req).pipe(
    tap(event => {
      console.log(event);
      
      if (event instanceof HttpResponse) {
        console.log(event.body);
        
        if(event.body == 'loading...'){
          event = event.clone({ body: null });
          console.log('loading');
          
        }else{
          loadingService.progrssBarLoadingState.next(false);
  
        }
      }
    })
  );
};
