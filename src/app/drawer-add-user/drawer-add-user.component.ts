import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-drawer-add-user',
  templateUrl: './drawer-add-user.component.html',
  styleUrls: ['./drawer-add-user.component.css']
})
export class DrawerAddUserComponent implements OnInit {
  formGroup: FormGroup;
  userDialog: boolean;
  submitted: boolean;

  constructor(private fb: FormBuilder, private service: UserService) {}

  ngOnInit(): void {
    this.loadForm();
  }

  hideDialog() {
    this.userDialog = false;
  }

  addUser() {
  }

  loadForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

}
