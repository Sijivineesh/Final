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
var employee_services_1 = require("./employee.services");
var router_1 = require("@angular/router");
var CreateEmployeeComponent = (function () {
    function CreateEmployeeComponent(_employeeservice, _routerService, _route) {
        this._employeeservice = _employeeservice;
        this._routerService = _routerService;
        this._route = _route;
        this.dateofbirth = new Date(2018, 0, 30);
        this.photoPreview = false;
        this.title = "Create";
        this.department = [
            { id: 1, name: 'IT' },
            { id: 2, name: 'Accounting' },
            { id: 3, name: 'HR' },
            { id: 4, name: 'Payroll' }
        ];
        // tslint:disable-next-line:max-line-length
    }
    CreateEmployeeComponent.prototype.togglePreview = function () {
        this.photoPreview = !this.photoPreview;
    };
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (parametrMap) {
            var id = +parametrMap.get('id');
            _this.getEmployee(id);
        });
    };
    //EDIT
    CreateEmployeeComponent.prototype.getEmployee = function (id) {
        var _this = this;
        if (id === 0) {
            this.employee = {
                id: null,
                name: null,
                gender: null,
                city: null,
                phoneno: null,
                contactpreference: null,
                dateofbirth: null,
                department: null,
                isactive: null,
                photopath: null,
                confirmpassword: null,
                password: null
            };
        }
        else {
            this.title = "Edit";
            this._employeeservice.getEmployeeByID(id)
                .subscribe(function (resp) { return _this.CreateEmployeeForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    //SAVE
    CreateEmployeeComponent.prototype.saveEmployee = function () {
        var _this = this;
        if (!this.CreateEmployeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeservice.saveEmployee(this.CreateEmployeeForm.value)
                .subscribe(function (data) {
                _this._routerService.navigate(['/listemployees']);
            }, function (error) { return _this.errorMessage = error; });
        }
        else if (this.title == "Edit") {
            this._employeeservice.updateEmployee(this.CreateEmployeeForm.value)
                .subscribe(function (data) {
                _this._routerService.navigate(['/listemployees']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    CreateEmployeeComponent.prototype.cancel = function () {
        this._routerService.navigate(['/listemployees']);
    };
    return CreateEmployeeComponent;
}());
CreateEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'app-createemployee',
        templateUrl: './createemployee.component.html',
    }),
    __metadata("design:paramtypes", [employee_services_1.EmployeeServices,
        router_1.Router, router_1.ActivatedRoute])
], CreateEmployeeComponent);
exports.CreateEmployeeComponent = CreateEmployeeComponent;
//  saveEmployee(): void {
//    const newEmploy: Employee = Object.assign({}, this.employee);
//      this._employeeservice.saveEmployee(newEmploy);
//this._routerService.navigate(['listemployees']);
//  to pass value to controls after saving
// this.CreateEmployeeForm.reset({
// name: 'test name', gender: 'male'
// });
//# sourceMappingURL=createemployee.component.js.map