//import {Employee} from '../app/Models/employee.model';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeServices {

    myAppUrl: string = "";

    constructor(private _http: Http) {
        //this.myAppUrl = baseUrl;
    }

//private listemployees: Employee[] = [
//  {
//    id: 1,
//    name: 'luke',
//    gender: 'male',
//    contactpreference: 'Email',
//    city: 'Des Plaines',
//    dateofbirth: new Date('10/3/2018'),
//    department: '3',
//    isactive: true,
//    photopath: 'Images/1.jpg',
//    password: 'admin',
//    confirmpassword: 'admin'
//  },
//  {
//    id: 2,
//    name: 'mark',
//    gender: 'male',
//    contactpreference: 'Email',
//    city: 'Northbrook',
//    dateofbirth: new Date('10/3/2018'),
//    department: '1',
//    isactive: true,
//    photopath: 'Images/2.jpg',
//    password: 'admin',
//    confirmpassword: 'admin'
//  },
//  {
//    id: 3,
//    name: 'jacob',
//    gender: 'male',
//    contactpreference: 'Email',
//    city: 'chicago',
//    dateofbirth: new Date('10/3/2018'),
//    department: '2',
//    isactive: true,
//    photopath: 'Images/3.jpg',
//    password: 'admin',
//    confirmpassword: 'admin'
//  }

//];



getEmployees() {
    return this._http.get(this.myAppUrl + 'api/Employee/Index')
        .map((response: Response) => response.json())
        .catch(this.errorHandler);
}


    getEmployeeByID(id: number) {
    return this._http.get(this.myAppUrl + "api/Employee/Details/" + id)
        .map((response: Response) => response.json())
        .catch(this.errorHandler)
}

saveEmployee(employee) {
    return this._http.post(this.myAppUrl + 'api/Employee/Create', employee)
        .map((response: Response) => response.json())
        .catch(this.errorHandler)
}

updateEmployee(employee) {
    return this._http.put(this.myAppUrl + 'api/Employee/Edit', employee)
        .map((response: Response) => response.json())
        .catch(this.errorHandler);
}

deleteEmployee(id) {
    return this._http.delete(this.myAppUrl + "api/Employee/Delete/" + id)
        .map((response: Response) => response.json())
        .catch(this.errorHandler);
}

errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
}
}


    

