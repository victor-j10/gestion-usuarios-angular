import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'assets/db.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<{ users: User[] }>('assets/db.json').pipe(
      map(response => response.users)
    );
  }

  getUserById(id: number): Observable<User | undefined> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id))
    );
  }
}
