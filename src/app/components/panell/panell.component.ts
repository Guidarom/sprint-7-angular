import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { calculatorService} from '../../components.service';



@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  ngOnInit() {
    this.pags = this.calculatorService.pags;
    this.languages = this.calculatorService.languages;
  }

  @Input() pags: number = 1;
  @Input() languages: number = 1;

  @Output() pagsChange = new EventEmitter<number>();
  @Output() languagesChange = new EventEmitter<number>();
  constructor(private calculatorService: calculatorService) {}








  cambiarCantidad1(event:any){

    if (event.target.value>0){
      this.pags = event.target.value
      this.pagsChange.emit(this.pags)
      
      //console.log('La cantidad de páginas es' +' '+ this.newPanel.numberPages)
    }

  }
  cambiarCantidad2(event:any){

    if (event.target.value>0){
      this.languages = event.target.value
      this.languagesChange.emit(this.languages);

      
      //console.log('La cantidad de languages es:' + ' ' + this.newPanel.numberLanguages)
    }

  } 


 decrementPage() {
    if(this.pags<=1){
      this.pags = 1
      this.pagsChange.emit(this.pags)
      return
    }
    this.pags--;
    this.pagsChange.emit(this.pags);
  }

  incrementPage() {
    if(this.pags<=0){
      this.pags = 0
    }
    this.pags++;
    this.pagsChange.emit(this.pags);
  } 

   decrementLang() {
     if(this.languages<=1){
     this.languages = 1
     this.languagesChange.emit(this.languages)
     return
    }
    this.languages--;
    this.languagesChange.emit(this.languages);
  }

  incrementLang() {
    if(this.languages<=0){
      this.languages = 0
    }
    this.languages++;
    this.languagesChange.emit(this.languages);
  }  
}


  

