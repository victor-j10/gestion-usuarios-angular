import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggediN = !!localStorage.getItem('user');

  if (isLoggediN) {
    return true;
  } else {
    return router.createUrlTree(['/']);
  }
}