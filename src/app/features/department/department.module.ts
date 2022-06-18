import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentRoutingModule } from './department-routing.module';

@NgModule({
  declarations: [
    DepartmentComponent,
    AddDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
