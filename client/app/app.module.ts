import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LandPersianaComponent } from './land-persiana/land-persiana.component';
import { ItemComponent } from './item/item.component';

import { PersianaService } from './services/persiana.service';


@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    LandPersianaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule
  ],
  providers: [
    PersianaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
