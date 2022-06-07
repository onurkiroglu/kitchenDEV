import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url)
  }

  addUser(user) {
    return this.http.post(this.url, user);
  }

  editUser(user) {
    return this.http.put(this.url + '/' + user.id, user);
  }

  deleteUser(id) {
    return this.http.delete(this.url + '/' + id);
  }

}
