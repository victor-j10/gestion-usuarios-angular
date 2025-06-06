import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

/***
 Interfaz que define la estructura del objeto Usuario.
 Se utiliza para mantener el tipado de datos correcto que viene desde la api
***/
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
  //se crea la variable que guardará la ruta del servidor ficticio
  private API_URL = 'assets/db.json';

  //se deja claro el cliente HttpClient para realizar las peticiones al servidor ficticio
  constructor(private http: HttpClient) { }

  //se crea el método para obtener los usuarios
  getUsers(): Observable<User[]> {
    //se retorna el resultado de la petición, en este caso, se están guardando los datos
    //consultados a la api en un array
    return this.http.get<{ users: User[] }>(this.API_URL).pipe(
      map(response => response.users)
    );
  }

  //se crea el método para obtener un usuario por id
  getUserById(id: number): Observable<User | undefined> {
    //se retorna el usuario si existe una coincidencia en la api
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === id))
    );
  }
}
