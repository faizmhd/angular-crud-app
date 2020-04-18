import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    return this.http.get('http://localhost:8000/getUsers');
  }

  createUser(user) {
    return this.http.post('http://localhost:8000/addUser', user)
  }
}
