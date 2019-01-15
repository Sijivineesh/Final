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
var router_1 = require("@angular/router");
var employee_services_1 = require("../app/employee.services");
var ListEmployeesComponent = (function () {
    // @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee >();
    function ListEmployeesComponent(_route, _Router, _EmployeeService) {
        this._route = _route;
        this._Router = _Router;
        this._EmployeeService = _EmployeeService;
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    ListEmployeesComponent.prototype.getEmployees = function () {
        this.employees = this._EmployeeService.getEmployee();
    };
    ListEmployeesComponent.prototype.delete = function (employeeID) {
        var _this = this;
        var ans = confirm("Do you want to delete customer with Id: " + employeeID);
        if (ans) {
            this._EmployeeService.deleteEmployee(employeeID).subscribe(function (data) {
                _this.getEmployees();
            }, function (error) { return console.error(error); });
        }
    };
    return ListEmployeesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListEmployeesComponent.prototype, "employees", void 0);
ListEmployeesComponent = __decorate([
    core_1.Component({
        selector: 'app-listemployees',
        templateUrl: './listemployees.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, employee_services_1.EmployeeServices])
], ListEmployeesComponent);
exports.ListEmployeesComponent = ListEmployeesComponent;
//viewEmpoly() {
//    this._Router.navigate(['/employees', this.employee.id]);
//}
//editEmp() {
//    this._Router.navigate(['/edit', this.employee.id]);
//}
//# sourceMappingURL=listemployees.component.js.map