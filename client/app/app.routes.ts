import { Route } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/dashboard/home/home.component';
import { UserComponent } from './admin/dashboard/user/user.component';
import { IconsComponent } from './admin/dashboard/icons/icons.component';
import { TableComponent } from './admin/dashboard/table/table.component';
import { NotificationsComponent } from './admin/dashboard/notifications/notifications.component';
import { TypographyComponent } from './admin/dashboard/typography/typography.component';
import { MapsComponent } from './admin/dashboard/maps/maps.component';
import { UpgradeComponent } from './admin/dashboard/upgrade/upgrade.component';

export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: AppComponent },
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'upgrade', component: UpgradeComponent }
]

export const MODULE_COMPONENTS = [
    DashboardComponent,
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    UpgradeComponent
]
