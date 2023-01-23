import { Component,Input } from '@angular/core';
import { calculatorService } from '../../components.service';


@Component({
  selector: 'app-budget-list',

  templateUrl: './budget-list.component.html', 
  styleUrls: ['./budget-list.component.css'] 
})
export class BudgetListComponent  {



  constructor(private calculatorService: calculatorService) {}
  @Input() mensaje: string = ''
  @Input() budgetList: any;


  //@Input() showBudgetComponent: boolean = false;

  

  get showBudgetComponent():any {
    return this.calculatorService.showBudgetComponent;
    
  } 
  



  removeBudget(list:any): void{
    this.budgetList.splice(list,1)
    //this.showBudgetComponent();
    if (this.budgetList.length===0){
      this.calculatorService.showBudgetComponent();
    }
    
    
  }

}
