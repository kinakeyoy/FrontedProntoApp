import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material/material.module';

@NgModule({
  declarations: [LoginComponent, RegistroComponent, HomeComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
