import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Quantity {  
  numberPages: Number;
  numberLanguages: Number;
}

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent {

  @Input() totalSum:Number=0;
  @Output() newQuantity1 = new EventEmitter<Number>();
  @Output() newQuantity2 = new EventEmitter<Number>();
  

  newPanel:Quantity= {
    numberPages: 1,
    numberLanguages:1
  }


  cambiarCantidad1(event:any){

    if (event.target.value>=1){
      this.newQuantity1.emit(this.newPanel.numberPages)
      //console.log('La cantidad de páginas es' +' '+ this.newPanel.numberPages)
    }

  }
  cambiarCantidad2(event:any){

    if (event.target.value>=1){

      this.newQuantity2.emit(this.newPanel.numberLanguages)
      //console.log('La cantidad de idiomas es:' + ' ' + this.newPanel.numberLanguages)
    }

  } 

  
}
