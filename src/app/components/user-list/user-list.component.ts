import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  //se declara el array dónde se guardarán los datos
  users: User[] = [];
  //se deja en claro las columnas.
  displayedColumns = ['id', 'name', 'email', 'role', 'actions'];
  //se crea la variable para manejar el snipper de la carga
  loading = false;

  //se inyecta el userService y el router
  constructor(private userService: UserService, private router: Router) { }

  /*se obtienen los datos usando el método del userService "getUsers"
  si todo va bien los guarda en la variable user, sino lanza un error
  */
  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
        this.loading = false;
      }
    });
  }

  //botón para navegar a la vista detalle
  goToDetails(id: number) {
    this.router.navigate(['/users', id]);
  }

}
