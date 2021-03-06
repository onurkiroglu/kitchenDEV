import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DrawerAddUserComponent } from './drawer-add-user/drawer-add-user.component';
import { DrawerEditUserComponent } from './drawer-edit-user/drawer-edit-user/drawer-edit-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import {TooltipModule} from 'primeng/tooltip';
import {InputNumberModule} from 'primeng/inputnumber';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DrawerAddUserComponent,
    DrawerEditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ToolbarModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule,
    InputNumberModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
