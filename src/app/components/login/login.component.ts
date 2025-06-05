import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(){
    this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(u => u.username === this.username && u.password === this.password);
      if(user){
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/users']);
      } else {
        this.errorMessage = 'Credenciales inválidas'
      }
    });
  }

}
