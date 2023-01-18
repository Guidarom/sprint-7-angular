import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'modal',component:ModalComponent},
 //  {path:'**',pathMatch:'full',redirectTo:'modal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
