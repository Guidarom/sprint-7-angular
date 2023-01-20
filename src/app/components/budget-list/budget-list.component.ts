import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-budget-list',

  templateUrl: './budget-list.component.html', 
  styleUrls: ['./budget-list.component.css'] 
})
export class BudgetListComponent {
  @Input() mensaje: string = ''
  @Input() budgetList: any


  removeBudget(list:any){
    this.budgetList.splice(list,1)
  }

}
