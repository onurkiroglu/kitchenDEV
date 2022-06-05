import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  addDrawer = false;


  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data);
    });
  }

  openAddUserDrawer() {
    this.addDrawer= !this.addDrawer;
  }

  ngOnInit(): void {

  }

}
