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

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    const users = userString ? JSON.parse(userString) : null;
    this.user = users;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  home(){
    this.router.navigate(['/users']);
  }

}
