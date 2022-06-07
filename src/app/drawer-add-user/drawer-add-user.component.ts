import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-drawer-add-user',
  templateUrl: './drawer-add-user.component.html',
  styleUrls: ['./drawer-add-user.component.css']
})
export class DrawerAddUserComponent implements OnInit {
  userForm: FormGroup;
  user: any;
  users: any[];
  value4: string;
  userDialog: boolean;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private service: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required]],
      website: ['', [Validators.required]],
      company:  ['', Validators.required],
    });

  }

  hideDialog() {
    this.userDialog = false;
  }

  addUser(user) {
    this.submitted = true;
    this.service.addUser(this.userForm.value).subscribe(response => {
      user['id'] = response['id'];
      this.users.splice(0, 0, user);
    });
    this.userDialog = false;
}

}
