import { Component } from '@angular/core';
import { calculatorService} from '../../components.service';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})

export class HomeComponent{
    constructor(private calculatorService: calculatorService) {}
    showChildComponent = false;
    budgetName: string = ' ';
    clientName: string = ' ' ;

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
      this.calculatorService.saveBudget();
      console.log('el presupuesto ' +''+ this.budgetName+ ''+'de' +this.clientName)
    }

}