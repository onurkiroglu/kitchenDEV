import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  addDrawer = false;
  editDrawer = false;
  users: any[];
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(response => {
      this.users = response as any[];
    });
  }

  showAddUserDialog() {
    this.addDrawer = true;
  }

  editUser(user) {
    this.editDrawer = true;
  }

  deleteUser(user) {
    this.http.delete(this.url + '/' + user.id).subscribe(response => {
      let index = this.users.indexOf(user);
      this.users.splice(index, 1);
    });
  }

}
