import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-drawer-edit-user',
  templateUrl: './drawer-edit-user.component.html',
  styleUrls: ['./drawer-edit-user.component.css']
})
export class DrawerEditUserComponent implements OnInit {
  formGroup: FormGroup;

  @Output() drawerClosed = new EventEmitter<boolean>();
  @Output() submittedForm = new EventEmitter<object>();
  @Input() user;
  constructor( private service: UserService) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnChanges() {
    if (this.user) {
    this.formGroup.setValue({name: this.user['name'], username: this.user['username'], email: this.user['email'], address: this.user['address']['street'], phone: this.user['phone'], website: this.user['website'], company: this.user['company']['name'], id: this.user['id']});
    }
  };

  loadForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      id: new FormControl('')
    });
  }

  save() {
    this.user = Object.assign({}, this.formGroup.value);
    this.submittedForm.emit(this.user);
    this.drawerClosed.emit(false);
    // this.service.editUser(this.user).subscribe(response => {
    //   this.submittedForm.emit(this.user);
    //   this.drawerClosed.emit(false);
    // });
    // this.formGroup.reset();

  }

}
