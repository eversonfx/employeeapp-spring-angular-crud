import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRoutes } from './employee';

const routes: Routes = [
  { 
		path: '', 
		redirectTo: 'employees',
    pathMatch: 'full' 
	},
  ...EmployeeRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
