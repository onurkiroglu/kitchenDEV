import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-drawer-add-user',
  templateUrl: './drawer-add-user.component.html',
  styleUrls: ['./drawer-add-user.component.css']
})
export class DrawerAddUserComponent implements OnInit {
  userForm: FormGroup;
  value4: string;
  userDialog: boolean;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

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
    this.submitted = false;
    console.log('kapatıldı')
  }

  addUser() {
    console.log(this.userForm.value);

}

}
