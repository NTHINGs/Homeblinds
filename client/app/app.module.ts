import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LandPersianaComponent } from './land-persiana/land-persiana.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { SidebarModule } from './admin/sidebar/sidebar.module';
import { FooterModule } from './admin/shared/footer/footer.module';
import { NavbarModule} from './admin/shared/navbar/navbar.module';

import { PersianaService } from './services/persiana.service';


@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    LandPersianaComponent,
    ItemComponent,
    AdminComponent,
    MODULE_COMPONENTS
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule,
    HttpModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    RouterModule.forRoot([MODULE_ROUTES])
  ],
  providers: [
    PersianaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
