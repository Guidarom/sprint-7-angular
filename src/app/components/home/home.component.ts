import { Component } from '@angular/core';
import { calculatorService} from '../../components.service';


export interface Budget {
  id:         number;
  budgetName: string;
  clientName: string;
  date:       string;
  total:      number
}


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})

export class HomeComponent{
    constructor(private calculatorService: calculatorService) {}
    showChildComponent = false;

  budgetList:any=[];
    budgetName: string = ' ';
    clientName: string = ' ';

    get showChild(): boolean {
        return this.calculatorService.showChild;
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
      set languages(value: number) {
        this.calculatorService.languages = value;
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
      const today = new Date().toLocaleDateString();
      const newBudget: Budget = 
      {
        id:         this.budgetList.length + 1,
        budgetName: this.budgetName,
        clientName: this.clientName,
        date:       today,
        total:      this.precioTotal
      }
      this.calculatorService.saveBudget();
      console.log('el presupuesto ' +''+ this.budgetName+ ''+'de' +this.clientName)
      console.log(newBudget)
    }

}