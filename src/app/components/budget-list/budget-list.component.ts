import { Component,Input } from '@angular/core';
import { calculatorService, Budget } from '../../components.service';


@Component({
  selector: 'app-budget-list',

  templateUrl: './budget-list.component.html', 
  styleUrls: ['./budget-list.component.css'] 
})
export class BudgetListComponent  {

  searchBudget:string ='';
  budgetString: string ='';
  showBudgetName: boolean = false;



  constructor(private calculatorService: calculatorService) {}
  @Input() mensaje: string = ''
  @Input() budgetList: any;

  get showBudgetComponent():any {
    return this.calculatorService.showBudgetComponent;
    
  } 
  removeBudget(list:any): void{
    this.budgetList.splice(list,1)
  
    if (this.budgetList.length===0){
      this.calculatorService.showBudgetComponent();
    }
    
    
  }
  orderAlf(){
    this.budgetList.sort((a:any, b:any) => a.budgetName.localeCompare(b.budgetName));
  }
  orderDate(){
    this.budgetList.sort( (a:any, b:any) => (a.date - b.date ) ? 1 : -1);   
  }
  reset(){
    this.budgetList.sort((a:any, b:any) => (a.id > b.id) ? 1 : -1);
  }

  search(){

    const foundBudget= this.budgetList.find((e:any)=>this.searchBudget ===e.budgetName)
    

    if(foundBudget){
      foundBudget.toString()
      this.budgetString = JSON.stringify(foundBudget);
      this.showBudgetName = true;
      console.log(this.budgetString)
      
    }
    if (!foundBudget) {
      alert('tu presupuesto no ha sido encontrado')
      
    }
    console.log(this.searchBudget)
  }

}
