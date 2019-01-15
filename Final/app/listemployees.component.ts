import { Component, OnInit, OnChanges, Input  } from '@angular/core';
//import { Employee } from '../app/Models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServices } from '../app/employee.services';
@Component({
    selector: 'app-listemployees',
    templateUrl: './listemployees.component.html',
   
})
export class ListEmployeesComponent implements OnInit {
    //@Input() employees: Employee [];
    public empList: EmployeeData[]; 
    // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee >();
    constructor(private _route: ActivatedRoute, private _Router: Router, private _EmployeeService : EmployeeServices) { }

    ngOnInit() {
       this.getEmployees();

    }
    getEmployees() {
        this._EmployeeService.getEmployees().subscribe(
            data => this.empList = data 
            )
    }

    delete(employeeID) {
        var ans = confirm("Do you want to delete customer with Id: " + employeeID);
        if (ans) {
            this._EmployeeService.deleteEmployee(employeeID).subscribe((data) => {
                this.getEmployees(); 
            }, error => console.error(error))
        }
    }
}

interface EmployeeData {
    id: number;
    name: string;
    gender: string;
    department: string;
    city: string;
}
   
    //viewEmpoly() {
    //    this._Router.navigate(['/employees', this.employee.id]);
    //}
    //editEmp() {
    //    this._Router.navigate(['/edit', this.employee.id]);
    //}


