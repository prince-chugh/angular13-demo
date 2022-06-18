import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHelperService } from 'src/app/util/FormHelperService';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  exports: [
    AddUserComponent
  ],
  providers: [FormHelperService]
})
export class UsersModule { }
