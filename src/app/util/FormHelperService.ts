import { Injectable } from '@angular/core';
import { FormModel } from './FormModel';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Injectable()
export class FormHelperService {
    constructor(private commonService: CommonService) {

    }
    getFormControls() {
        const formControls: FormModel<string>[] = [];
        const formConfig = this.commonService.getFormConfig();
        formConfig.forEach((data: any) => {
            formControls.push(new FormModel(data))
        });
        return formControls;
    }

    toFormGroup(formControls: FormModel<string>[]) {
        const group: any = {};
        formControls.forEach(control => {
            group[control.key] = control.required
                ? new FormControl(control.value || '', Validators.required)
                : new FormControl(control.value || '');
        });
        return new FormGroup(group);
    }
}