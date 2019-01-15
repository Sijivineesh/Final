"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var listemployees_component_1 = require("./listemployees.component");
var createemployee_component_1 = require("./createemployee.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var employee_services_1 = require("./employee.services");
var AppRoutes = [
    { path: 'listemployees', component: listemployees_component_1.ListEmployeesComponent },
    { path: 'createemployee', component: createemployee_component_1.CreateEmployeeComponent },
    { path: '', redirectTo: 'listemployees', pathMatch: 'full' },
    { path: 'employee/edit/:id', component: createemployee_component_1.CreateEmployeeComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(AppRoutes), forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
            common_1.CommonModule
        ],
        declarations: [app_component_1.AppComponent, listemployees_component_1.ListEmployeesComponent,
            createemployee_component_1.CreateEmployeeComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_services_1.EmployeeServices]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map