import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError,finalize } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { LoadingService } from '../modules/lessons/services/loading.service';
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.progrssBarLoadingState.next(true);
    
  return next(req).pipe(
    timeout(999999),
      catchError(error => {
        if (error.name === 'TimeoutError') {
          return throwError(new Error('Request timed out'));
        }
        return throwError(error);
      }),
    finalize(()=> {loadingService.progrssBarLoadingState.next(false);}));
};

