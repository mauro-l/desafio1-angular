import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const noHomeroValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null =>{

    if( typeof control.value === 'string' && control.value?.includes('homero')){
        return{
            noHomero: true,
        }
    }


    return null
}