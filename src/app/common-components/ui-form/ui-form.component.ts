import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from 'src/app/util/FormModel';

@Component({
  selector: 'ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.css']
})
export class UiFormComponent implements OnInit {
  @Input()
  formControls!: FormModel<string>[];
  @Input()
  formGroup!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
