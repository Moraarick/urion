import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../dashboard/dashboard.component';
import {EmployeeComponent} from '../employee/employee.component';
import {DocumentComponent} from '../document/document.component';

const APP_ROUTES:Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'document', component: DocumentComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
