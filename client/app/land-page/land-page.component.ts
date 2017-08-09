import { Component, OnInit } from '@angular/core';
import { PersianaService } from '../services/persiana.service';

// Component decorator
@Component({
  selector: 'land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})

// Any method defined here is accesible by the template
export class LandPageComponent implements OnInit {
    persiana = {};
    persianas = [];

    offset(index){
      var offset = this.persianas.length % 3;
      if(index === this.persianas.length - offset){
        return 4 / offset;
      }else{
        return 0;
      }
    }
    openDialog(persiana){
      this.persiana = persiana;
    };
    // In the constructor is defined dependency injection
    constructor(private persianaService: PersianaService){ }

    // Everything in this method would run at init
    ngOnInit(){
      this.getPersianas();
      console.log(this.persianas);
    }

    getPersianas() {
      this.persianaService.getPersianas().subscribe(
        data => this.persianas = data,
        error => console.log(error)
      );
    }
}
