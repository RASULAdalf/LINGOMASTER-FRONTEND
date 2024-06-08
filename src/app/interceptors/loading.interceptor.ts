import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../modules/lessons/services/loading.service';
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.progrssBarLoadingState.next(true);
    
  return next(req).pipe(finalize(()=> {loadingService.progrssBarLoadingState.next(false);}));
};

