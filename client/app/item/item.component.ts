import { Component, OnInit, Input } from '@angular/core';

// Component decorator
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

// Any method defined here is accesible by the template
export class ItemComponent implements OnInit {
    @Input() persiana: any;

    // In the constructor is defined dependency injection
    constructor(){ }
    // Everything in this method would run at init
    ngOnInit(){ 
      this.persiana = {};
    }
}
