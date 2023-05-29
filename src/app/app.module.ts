import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ButtonComponent } from './button/button.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';



@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    EvenComponent,
    ButtonComponent,
    ChildComponent,
    ParentComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
