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
  email = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(private http: HttpClient, private router: Router) { }

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
