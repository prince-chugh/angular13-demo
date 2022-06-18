import { ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";

export const noBeginOrEndSpaces: ValidatorFn = (control: AbstractControl): ValidationErrors => {
    const regEx = /^ | $/;
    const value = control.value || '';
    if (regEx.test(value)) {
        return {beginOrEndSpace: true};
    }
    return {};
}