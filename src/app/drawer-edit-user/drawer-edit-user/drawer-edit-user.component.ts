import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-drawer-edit-user',
  templateUrl: './drawer-edit-user.component.html',
  styleUrls: ['./drawer-edit-user.component.css']
})
export class DrawerEditUserComponent implements OnInit {
  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loadForm();
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

  save() {
    console.log(this.formGroup.value);
  }

}
