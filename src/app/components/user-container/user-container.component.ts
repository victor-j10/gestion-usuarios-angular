import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [CommonModule, RouterModule, UserListComponent, UserDetailComponent],
  templateUrl: './user-container.component.html',
  styleUrl: './user-container.component.scss'
})
export class UserContainerComponent {

  user: any;

  constructor(private router: Router) { }

  //se obtienen los datos de la sesión para ser usados
  //esto lo hice para poder mostrar el nombre del usuario en la sesión
  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    const users = userString ? JSON.parse(userString) : null;
    this.user = users;
  }

  //método logout para remover los datos del localstorage y enviar al usuario de vuelva al login
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  //botón para ir a la vista users
  home(){
    this.router.navigate(['/users']);
  }

}
