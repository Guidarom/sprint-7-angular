import { Component } from '@angular/core';

/* export interface Prices{
    price1:number;
    price2:number;
    price3:number;
} */



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})

export class HomeComponent{

   /*  newPrices:Prices= {
        price1: 0,
        price2: 0,
        price3: 0
    } */

    showChildComponent = false;

    checked1= 0;
    checked2= 0;
    checked3= 0; 
    checked1plus=0;

    totalSum:number = 0;

    numPages:number=1;
    numLanguages:number=1


    
    
    onCheckbox1 (event:any){
        this.checked1=0
        this.checked1plus=0
        this.showChildComponent = false;
        
        if(event.target.checked){
            this.totalSum= 0
            this.showChildComponent = true;
            this.checked1 = 500
            this.checked1plus= this.checked1 + ((this.numPages)*(this.numLanguages)*30);
            this.totalSum = this.checked1plus + this.checked2 + this.checked3;
            
        }
        if(!event.target.checked){
            this.totalSum = this.checked1plus + this.checked2 + this.checked3;
        }
        
        
        //console.log(event.target.checked)
        
    }
    onCheckbox2 (event:any){
        this.checked2=0
        if(event.target.checked){
            this.checked2=300
            
        }
        this.totalSum = this.checked1plus + this.checked2 + this.checked3;
        //console.log(event.target.checked)
        
    }
    onCheckbox3 (event:any){
        this.checked3=0
        if(event.target.checked){
            this.checked3=200
            
        }
        this.totalSum = this.checked1plus + this.checked2 + this.checked3;
        //console.log(event.target.checked)
        
        
    }

    changePages(event:any){

        if (event>=1){
            //this.numPages = 0
            this.numPages = event
            this.checked1plus= this.checked1 + ((this.numPages)*(this.numLanguages)*30)
            this.totalSum = this.checked1plus + this.checked2 + this.checked3;
            //console.log('La cantidad de páginas es' +' '+ event)
    }
    }
    changelanguages(event:any){

        if (event>=1){
            //this.numLanguages = 0
            this.numLanguages = event
            this.checked1plus= this.checked1 + ((this.numPages)*(this.numLanguages)*30)
            this.totalSum = this.checked1plus + this.checked2 + this.checked3;
            //console.log('La cantidad de idiomas es' +' '+ event)
    }
    }
    
}