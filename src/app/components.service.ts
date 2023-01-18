import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class calculatorService {

  

  //constructor() { }
  public showChild: boolean = false;
  public precioTotal = 0;
  public precioWeb = 500;
  public precioSeo = 300;
  public precioAds = 200;
  public web: boolean = false;
  public seo: boolean = false;
  public ads: boolean = false;
  public pags: number = 0;
  public languages: number = 0;


  showPanel(){
    if(!this.web){
    this.showChild = false
    }
  }


  calculatePrice() {
    this.precioTotal = 0;
    if (this.web) {
      this.showChild=true;
      this.precioTotal += this.precioWeb;
    }
    if(!this.web){
      this.pags = 0
      this.languages = 0
    }
    if (this.seo) {
      this.precioTotal += this.precioSeo;
    }
    if (this.ads) {
      this.precioTotal += this.precioAds;
    }
    this.precioTotal += this.pags * this.languages * 30;
    
    if (!this.web && !this.seo && !this.ads) {
      this.precioTotal = 0;
    }
  }

}


