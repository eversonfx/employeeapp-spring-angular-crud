import { Routes } from '@angular/router';
import { EmployeeListComponent, EmployeeCreateComponent, EmployeeUpdateComponent, EmployeeDetailsComponent } from './components';
 
export const EmployeeRoutes: Routes = [
	{ 
		path: 'employees', 
		component: EmployeeListComponent 
	},
	{
		path:'create-employee',
		component: EmployeeCreateComponent  
	},
	{
		path: 'update-employee/:id',
		component: EmployeeUpdateComponent
	},
	{
		path: 'details-employee/:id',
		component: EmployeeDetailsComponent
	}
];