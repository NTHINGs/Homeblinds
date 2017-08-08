import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Component decorator
@Component({
  selector: 'land-persiana',
  templateUrl: './land-persiana.component.html',
  styleUrls: ['./land-persiana.component.css']
})

// Any method defined here is accesible by the template
export class LandPersianaComponent implements OnInit {
    @Input() nombre: string;
    @Input() offset: number;
    @Output() cambioPersiana = new EventEmitter();

    emitirNombre(){
      this.cambioPersiana.emit(this.nombre);
    };

    // TODO: getting this from service
    images = [
      "../assets/img/bg2.jpeg",
      "../assets/img/bg3.jpeg",
      "../assets/img/bg4.jpeg"
    ];
    // In the constructor is defined dependency injection
    constructor(){ }
    // Everything in this method would run at init
    ngOnInit(){ }
}
