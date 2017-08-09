import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


// Component decorator
@Component({
  selector: 'land-persiana',
  templateUrl: './land-persiana.component.html',
  styleUrls: ['./land-persiana.component.css']
})

// Any method defined here is accesible by the template
export class LandPersianaComponent implements OnInit {
    @Input() persiana: any;
    @Input() offset: number;
    @Output() cambioPersiana = new EventEmitter();
    
    // In the constructor is defined dependency injection
    constructor(){ }
    // Everything in this method would run at init
    ngOnInit(){ 
      
    }

    emitirPersiana(){
      this.cambioPersiana.emit(this.persiana);
    };
}
