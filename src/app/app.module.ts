import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MySelectComponent } from './my-select/my-select.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MyInputComponent } from './my-input/my-input.component';
import { MyFormComponent } from './my-form/my-form.component';



@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatSelectModule, MatInputModule ],
  declarations: [ AppComponent, HelloComponent, MySelectComponent, MyInputComponent, MyFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
