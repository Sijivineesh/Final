"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var EmployeeServices = (function () {
    function EmployeeServices(_http) {
        this._http = _http;
        this.myAppUrl = "";
        this.listemployees = [
            {
                id: 1,
                name: 'luke',
                gender: 'male',
                contactpreference: 'Email',
                city: 'Des Plaines',
                dateofbirth: new Date('10/3/2018'),
                department: '3',
                isactive: true,
                photopath: 'Images/1.jpg',
                password: 'admin',
                confirmpassword: 'admin'
            },
            {
                id: 2,
                name: 'mark',
                gender: 'male',
                contactpreference: 'Email',
                city: 'Northbrook',
                dateofbirth: new Date('10/3/2018'),
                department: '1',
                isactive: true,
                photopath: 'Images/2.jpg',
                password: 'admin',
                confirmpassword: 'admin'
            },
            {
                id: 3,
                name: 'jacob',
                gender: 'male',
                contactpreference: 'Email',
                city: 'chicago',
                dateofbirth: new Date('10/3/2018'),
                department: '2',
                isactive: true,
                photopath: 'Images/3.jpg',
                password: 'admin',
                confirmpassword: 'admin'
            }
        ];
        //this.myAppUrl = baseUrl;
    }
    EmployeeServices.prototype.getEmployee = function () {
        return this.listemployees;
    };
    EmployeeServices.prototype.getEmployees = function () {
        return this._http.get(this.myAppUrl + 'api/Employee/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeServices.prototype.getEmployeeByID = function (id) {
        return this._http.get(this.myAppUrl + "api/Employee/Details/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeServices.prototype.saveEmployee = function (employee) {
        return this._http.post(this.myAppUrl + 'api/Employee/Create', employee)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeServices.prototype.updateEmployee = function (employee) {
        return this._http.put(this.myAppUrl + 'api/Employee/Edit', employee)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeServices.prototype.deleteEmployee = function (id) {
        return this._http.delete(this.myAppUrl + "api/Employee/Delete/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeServices.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return EmployeeServices;
}());
EmployeeServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeServices);
exports.EmployeeServices = EmployeeServices;
//# sourceMappingURL=employee.services.js.map