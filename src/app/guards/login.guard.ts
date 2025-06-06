import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

//función para válidar la sesión
//con esta función se protegen las url
export const loginGuard: CanActivateFn = () => {
    //se inyecta el router para navegar
    const router = inject(Router);
    //se consulta si existe un usario creado en el localstorage
    const user = localStorage.getItem('user');

    //si existe se retorna la vista
    if(user){
        return router.createUrlTree(['/users']);
    }

    //si no existe se retorna true, lo que significa que no puede pasar del login aún.
    return true;
}