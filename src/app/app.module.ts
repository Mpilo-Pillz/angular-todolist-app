import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTitleComponent } from './list-title/list-title.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddToListComponent } from './to-do-list/add-to-list/add-to-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTitleComponent,
    ToDoListComponent,
    AddToListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
