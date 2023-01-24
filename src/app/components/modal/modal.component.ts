import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit{

  constructor( private modal: NgbModal){}

  ngOnInit(): void {  
  }
  open(contenido:any){
    this.modal.open(contenido);
    }
}
