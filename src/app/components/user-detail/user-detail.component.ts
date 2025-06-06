import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})

export class UserDetailComponent {
  //se crea el user usando el objeto de userService
  user: User | null = null;
  //se crea una variable booleana para controlar si no existe el usuario
  notFound: boolean = false;
  //se crea una variable booleana para controlar el loading
  loading = false;

  //se iyecta el route, userservice y router
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.loading = true;
    //se obtiene el id del usuario a consultar el detalle de la url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //se utiliza el método del userService para traer los datos del usuario
    //si hay una coincidencia trae los datos, si no, arrojará un error
    this.userService.getUserById(id).subscribe({
      next: (data) => {
        if (data) {
          this.user = data;
        } else {
          this.notFound = true;
        }
        this.loading = false;
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
      }
    });
  }

  //botón para volver a la vista users
  goBack() {
    this.router.navigate(['/users']);
  }

}
