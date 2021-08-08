import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeListComponent, EmployeeCreateComponent, EmployeeUpdateComponent, EmployeeDetailsComponent } from './components';
import { EmployeeService } from './services';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
