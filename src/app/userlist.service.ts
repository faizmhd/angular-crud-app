import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  deleteUser(user){
    return this.http.request('delete', 'http://localhost:8000/deleteUser', { body: { user }})
  }

  getUserById(id){
    return this.http.request('post', 'http://localhost:8000/getUserById', { body: { id }})
  }

  updateUser(id, user){
    return this.http.request('put', 'http://localhost:8000/updateUser', { body: { id, user: user }})
  }
}
