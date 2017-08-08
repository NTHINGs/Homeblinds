import { Component, OnInit } from '@angular/core';

// Component decorator
@Component({
  selector: 'land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})

// Any method defined here is accesible by the template
export class LandPageComponent implements OnInit {
    nombre = "";
    persianas = [
      "enrollable",
      "sheer",
			"vertical",
      "romana",
			"pvc"
    ];

    offset(index){
      var offset = this.persianas.length % 3;
      if(index === this.persianas.length - offset){
        return 4 / offset;
      }else{
        return 0;
      }
    }
    openDialog(nombre){
      this.nombre = nombre;
    };
    // In the constructor is defined dependency injection
    constructor(){ }

    // Everything in this method would run at init
    ngOnInit(){

    }
}
