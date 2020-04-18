import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  items;
  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    return this.http.get('/assets/users.json');
  }

  createUser(user) {

  }
}
