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
  user: any;


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

  changeDrawerAddUser(val: boolean) {
    this.addDrawer = val;
  }

  changeDrawerEditUser(val: boolean) {
    this.editDrawer = val;
  }

  closeAddUserDrawer() {
    this.addDrawer = false;
  }

  refreshAfterAddUserSubmit(val: object) {
    let newObject = {
      ...val,
      id: this.users.length + 1,
      address: {
        street: val['address'],
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      company: {
        name: val['company'],
        catchPhrase: '',
        bs: ''
      }
    };
    this.users.push(newObject);
  }

  refreshAfterEditUserSubmit(val: object) {
    let newObject = {
      ...val,
      address: {
        street: val['address'],
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      company: {
        name: val['company'],
        catchPhrase: '',
        bs: ''
      }
    };
    let array = []
    this.users = this.users.map(x =>
      x.id === newObject['id']
        ? {...newObject}
        : x
    );
  }

  showEditUserDrawer(user) {
    this.user = user;
    this.editDrawer = true;
  }

  deleteUser(user) {
    this.service.deleteUser(user.id).subscribe(response => {
      let index = this.users.indexOf(user);
      this.users.splice(index, 1);
    });
  }



}
