import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

//función para validar si el usuario está logueado
export const authGuard: CanActivateFn = () => {
  //se inyecta el router para realizar navegación
  const router = inject(Router);
  //se consulta si existe un usuario en el localStorage
  const isLoggedIn = !!localStorage.getItem('user');

  //si está logueado permite el acceso a la vista
  if (isLoggedIn) {
    return true;
  } else {
    //si no, se devuelve al login
    return router.createUrlTree(['/']);
  }
}