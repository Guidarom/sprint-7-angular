import { Injectable } from '@angular/core';


export interface Budget {
  id:         number;
  budgetName: string;
  clientName: string;
  date:       string;
  total:      number
}

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
  }

  showBudgetComponent (){
   
    this.showBudget=false
    console.log(this.showBudget)
    
    console.log('hola budget')
  }

  



  calculatePrice() {
    this.precioTotal = 0;
    let y = 30
    if (this.web) {
      this.showChild=true;
      this.precioTotal += this.precioWeb;
    }
    if(!this.web){
      y= 0;
      this.pags = 1
      this.languages = 1
    }
    if (this.seo) {
      this.precioTotal += this.precioSeo;
    }
    if (this.ads) {
      this.precioTotal += this.precioAds;
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
    console.log ('hola saveBudget funciona')

  }

  saveToLocalStorage(list: Budget[]) {
    localStorage.setItem('list', JSON.stringify(list))
    //console.log(localStorage)
  }

}


