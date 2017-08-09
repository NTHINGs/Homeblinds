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
    persiana;
    persianas = [];

    persianaLoaded = false;
    persianaSelected = false;

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
      this.persianaSelected = true;
    };
    // In the constructor is defined dependency injection
    constructor(private persianaService: PersianaService){ }

    // Everything in this method would run at init
    ngOnInit(){
      this.getPersianas();
      
    }

    getPersianas() {
      this.persianaService.getPersianas().subscribe(
        data => {
          this.persianas = data;
          this.persianaLoaded = true;
          console.log(this.persianas);
        },
        error => console.log(error)
      );
    }
}
