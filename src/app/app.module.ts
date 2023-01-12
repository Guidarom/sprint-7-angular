import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { PanellComponent } from './components/panell/panell.component';



const appRoutes:Routes=[

  {path:'',component:HomeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), // hemos agregado este router module 
    FormsModule //hemos añadido esto por importar formsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
