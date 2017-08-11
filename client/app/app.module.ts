import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LandPersianaComponent } from './land-persiana/land-persiana.component';
import { ItemComponent } from './item/item.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { DashboardModule } from './admin/dashboard/dashboard.module';
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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule,
    HttpModule,
    DashboardModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: AppComponent },
      { path: 'admin', component: DashboardComponent }
    ])
  ],
  providers: [
    PersianaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
