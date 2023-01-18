import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PanellComponent } from './components/panell/panell.component';
import { ModalComponent } from './components/modal/modal.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    ModalComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // hemos agregado este router module 
    FormsModule //hemos añadido esto por importar formsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
