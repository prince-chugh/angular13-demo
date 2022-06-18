import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormComponent } from './ui-form/ui-form.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UiFormComponent,
    ErrorMessageComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UiFormComponent,
    ErrorMessageComponent
  ]
})
export class CommonComponentsModule { }
