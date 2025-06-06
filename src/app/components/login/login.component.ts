import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //se declaran vacías las variables que recibirán la info de los input
  email = '';
  password = '';
  //se declara una variable vacía para mandar mensajes de error
  errorMessage = '';
  //se declara una variable booleana false para controlar el snipper de la carga de la solicitud
  loading = false;

  //se inyecta http para las peticiones y router para la navegación
  constructor(private http: HttpClient, private router: Router) { }

  /*
  El método login obtiene los datos del db.json y busca una coincidencia con los ingresados
  en el input. si es correcto guarda los datos del usuario en el localStorgae y lo envía
  a la vista principal, si algo falla se mostrará un mensaje de error.
  */
  login() {
    this.loading = true;

    this.http.get<{ users: any[] }>('assets/db.json').subscribe({
      next: (data) => {
        const user = data.users.find(
          u => u.email === this.email && u.password === this.password
        );
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/users']);
        } else {
          this.errorMessage = 'Credenciales inválidas';
        }
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Error al conectar con el servidor';
        this.loading = false;
      }
    });
  }



}
