import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ListEmployeesComponent } from './listemployees.component';
import { CreateEmployeeComponent } from './createemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core'
import { AppComponent } from './app.component';
import { EmployeeServices } from './employee.services';

const AppRoutes: Routes = [

    { path: 'listemployees', component: ListEmployeesComponent },
    { path: 'createemployee', component: CreateEmployeeComponent },
    { path: '', redirectTo: 'listemployees', pathMatch: 'full' }, 
    { path: 'employee/edit/:id', component: CreateEmployeeComponent },

];


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(AppRoutes), FormsModule, ReactiveFormsModule, HttpModule,
        CommonModule
],
    declarations: [AppComponent, ListEmployeesComponent,
        CreateEmployeeComponent
    ],
    bootstrap: [AppComponent],
    providers: [EmployeeServices]
})
export class AppModule { }
