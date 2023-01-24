import { Injectable } from '@angular/core';
import { Budget } from './components/interface/budget';




@Injectable({
  providedIn: 'root'
})
export class calculatorService {
  budgetList: Budget[] = [];

  

  //constructor() { }
  public showChild: boolean = false;
  public showBudget: boolean =false;
  public precioTotal = 0;
  public precioWeb = 500;
  public precioSeo = 300;
  public precioAds = 200;
  public web: boolean = false;
  public seo: boolean = false;
  public ads: boolean = false;
  public pags: number = 1;
  public languages: number = 1;


  showPanel(){
    if(!this.web){
    this.showChild = false
    }
     else{
      this.showChild = true
    } 
  }

  showBudgetComponent (){
    this.showBudget=false
    console.log(this.showBudget)
    
    console.log('hola budget')
  }

  calculatePrice() {
    let y = 30;
    this.precioTotal = (this.web ? this.precioWeb : 0) + (this.seo ? this.precioSeo : 0) + (this.ads ? this.precioAds : 0);
    if (!this.web) {
        y = 0;
        this.pags = 1;
        this.languages = 1;
        this.showChild=false;
    }
    this.precioTotal += this.pags * this.languages * y;
    if (!this.web && !this.seo && !this.ads) {
        this.precioTotal = 0;
    }
}

  





  saveBudget(){
    if(this.budgetList.length===0){
      this.showBudget= false
    }
    //console.log ('hola saveBudget funciona')

  }

  saveToLocalStorage(list: Budget[]) {
    localStorage.setItem('list', JSON.stringify(list))
    console.log(localStorage)
  }

}


