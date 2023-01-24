import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { PanellComponent } from './components/panell/panell.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:'',component: WelcomeComponent},
  {path:'home',component: HomeComponent},
  {path:'modal',component:ModalComponent},
  {path:'panell',component:PanellComponent},
  {path:'budgetList',component:BudgetListComponent},
 //  {path:'**',pathMatch:'full',redirectTo:'modal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
