import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-drawer-add-user',
  templateUrl: './drawer-add-user.component.html',
  styleUrls: ['./drawer-add-user.component.css']
})
export class DrawerAddUserComponent implements OnInit {
  formGroup: FormGroup;
  submitted: boolean;
  userDialog: boolean;
  newUser: any;

  @Output() drawerClosed = new EventEmitter<boolean>();
  @Output() submittedForm = new EventEmitter<object>();
  constructor(private fb: FormBuilder, private service: UserService) {}

  ngOnInit(): void {
    this.loadForm();
  }

  onClear() {
    this.formGroup.reset();
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
    this.newUser = Object.assign({}, this.formGroup.value);
    this.service.addUser(this.newUser).subscribe(response => {
      this.submittedForm.emit(this.newUser);
      this.drawerClosed.emit(false);
    });
    this.formGroup.reset();
  }

}
