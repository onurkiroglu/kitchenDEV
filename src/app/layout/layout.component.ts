import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  addDrawer = false;
  editDrawer = false;
  users: any[];


  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(response => {
      this.users = response as any[];
    });
  }

  showAddUserDrawer() {
    this.addDrawer = true;
  }

  closeAddUserDrawer() {
    this.addDrawer = false;
  }

  showEditUserDrawer(user) {
    this.editDrawer = true;
  }

  deleteUser(user) {
    this.service.deleteUser(user.id).subscribe(response => {
      let index = this.users.indexOf(user);
      this.users.splice(index, 1);
    });
  }

}
