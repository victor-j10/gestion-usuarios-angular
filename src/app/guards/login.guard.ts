import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const loginGuard: CanActivateFn = () => {
    const router = inject(Router);
    const user = localStorage.getItem('user');

    if(user){
        return router.createUrlTree(['/users']);
    }

    return true;
}