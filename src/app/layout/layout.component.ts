import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import { DrawerAddUserComponent } from '../drawer-add-user/drawer-add-user.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  addDrawer = false;
  users: any[];

  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.users = response as any[];
    });
  }

  ngOnInit(): void {
  }

  showDialog() {
    this.addDrawer = true;
  }

  editUser(user) {

  }

  deleteUser(user) {

  }

}
