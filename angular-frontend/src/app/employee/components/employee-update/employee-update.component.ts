import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models';
import { EmployeeService } from '../../services';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
     }, error => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
        this.gotToEmployeeList();
   }, error => console.log(error));
  }

gotToEmployeeList() {
  this.router.navigate(['/employees']);
}


}
