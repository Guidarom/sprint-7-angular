import { Component } from '@angular/core';
import { calculatorService} from '../../components.service';
import { Budget } from '../../components.service';





@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})

export class HomeComponent{
    constructor(private calculatorService: calculatorService) {}
    showChildComponent: boolean = false;
    //showBudgetComponent: boolean = this.showtable;
  

    public mensaje = 'Hola desde el componente padre!'

    get budgetList(){
      return this.calculatorService.budgetList;
    }
    

    budgetName: string = ' ';
    clientName: string = ' ';

    get showChild(): boolean {
        return this.calculatorService.showChild;
      }

      get showTable():boolean{
        return this.calculatorService.showBudget;
      }
      
      set showTable(value: boolean) {
        this.calculatorService.showBudget = value;
      }


    set web(value: boolean) {
        this.calculatorService.web = value;
      }
      set seo(value: boolean) {
        this.calculatorService.seo = value;
      }
      set ads(value: boolean) {
        this.calculatorService.ads = value;
      }
      get precioTotal(): number {
        return this.calculatorService.precioTotal;
      }

      get languages(): number {
        return this.calculatorService.languages;
      }
      
      set languages(value: number) {
        this.calculatorService.languages = value;
      }
      get pags(): number {
        return this.calculatorService.pags;
      }
      set pags(value: number) {
        this.calculatorService.pags = value;
    }
    
    


    showPanel() {
        this.calculatorService.showPanel();
    }

    calculatePrice() {
        
        this.calculatorService.calculatePrice();
        }

    saveBudget() {
      //this.showBudgetComponent = true;
      const today = new Date().toLocaleDateString();
      const newBudget: Budget = 
      {
        id:         this.budgetList.length + 1,
        budgetName: this.budgetName,
        clientName: this.clientName,
        date:       today,
        total:      this.precioTotal
      }

      if (newBudget.budgetName.trim().length >= 3 && newBudget.clientName.trim().length >= 3 ) {
        
        this.budgetList.push(newBudget)
        this.calculatorService.saveToLocalStorage(this.budgetList)
        console.log(localStorage)
        
        // El campo es válido
    }
    if(this.budgetList.length > 0){
    this.showTable = true;
    }
    




      this.calculatorService.saveBudget();
      console.log('el presupuesto ' +''+ this.budgetName+ ''+'de' +this.clientName)
      console.log(newBudget)
      console.log(this.budgetList)
    }

}