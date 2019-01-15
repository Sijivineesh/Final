import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm,FormGroup} from '@angular/forms';
import { Department } from './Models/department.model';
//import { Employee } from './Models/employee.model';

import { EmployeeServices } from './employee.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-createemployee',
    templateUrl: './createemployee.component.html',

})
export class CreateEmployeeComponent implements OnInit {
    //@ViewChild('employeeForm') public CreateEmployeeForm: NgForm;
    CreateEmployeeForm: FormGroup;
    dateofbirth: Date = new Date(2018, 0, 30);
    photoPreview = false;
    title: string = "Create";
    errorMessage: any;

    department: Department[] = [
        { id: 1, name: 'IT' },
        { id: 2, name: 'Accounting' },
        { id: 3, name: 'HR' },
        { id: 4, name: 'Payroll' }
    ];
    constructor(private _employeeservice: EmployeeServices,
        private _routerService: Router, private _route: ActivatedRoute) {
        // tslint:disable-next-line:max-line-length
    }
    togglePreview() {
        this.photoPreview = !this.photoPreview;
    }
    ngOnInit() {
        this._route.paramMap.subscribe(parametrMap => {
            const id = +parametrMap.get('id');
            this.getEmployee(id);
        });
    }
    //EDIT
    private getEmployee(id: number) {
        if (id > 0) {
            this.title = "Edit";
            this._employeeservice.getEmployeeByID(id)
                .subscribe(resp => this.CreateEmployeeForm.setValue(resp)
                , error => this.errorMessage = error);
        }
    }
    //SAVE
    saveEmployee() {

        if (!this.CreateEmployeeForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._employeeservice.saveEmployee(this.CreateEmployeeForm.value)
                .subscribe((data) => {
                    this._routerService.navigate(['/listemployees']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._employeeservice.updateEmployee(this.CreateEmployeeForm.value)
                .subscribe((data) => {
                    this._routerService.navigate(['/listemployees']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._routerService.navigate(['/listemployees']);
    } 
}
//  saveEmployee(): void {
//    const newEmploy: Employee = Object.assign({}, this.employee);
//      this._employeeservice.saveEmployee(newEmploy);
//this._routerService.navigate(['listemployees']);
//  to pass value to controls after saving
// this.CreateEmployeeForm.reset({
  // name: 'test name', gender: 'male'
// });

