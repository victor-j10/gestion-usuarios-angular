import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [loginGuard] },
    {
        path: 'users',
        component: UserContainerComponent,
        canActivate: [authGuard],
        children: [
            { path: '', component: UserListComponent },
            { path: ':id', component: UserDetailComponent },
        ]
    }

];
