import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function dateAndTimeValidator(mergeDateAndTime:any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const loadingStartDate = control.get('loadingStartDate')?.value;
    const loadingEndDate = control.get('loadingEndDate')?.value;
    const loadingStartTime = control.get('loadingStartTime')?.value;
    const loadingEndTime = control.get('loadingEndTime')?.value;
    const unloadingStartDate = control.get('unloadingStartDate')?.value;
    const unloadingEndDate = control.get('unloadingEndDate')?.value;
    const unloadingStartTime = control.get('unloadingStartTime')?.value;
    const unloadingEndTime = control.get('unloadingEndTime')?.value;

    if (!loadingStartDate || !loadingEndDate || !loadingStartTime || !loadingEndTime ||
      !unloadingStartDate || !unloadingEndDate || !unloadingStartTime || !unloadingEndTime) {
      return null;
    }
    const loadingStart = mergeDateAndTime(loadingStartDate, loadingStartTime)
    const loadingEnd = mergeDateAndTime(loadingEndDate, loadingEndTime)
    const unloadingStart = mergeDateAndTime(unloadingStartDate, unloadingStartTime)
    const unloadingEnd = mergeDateAndTime(unloadingEndDate, unloadingEndTime)


    const errors: ValidationErrors = {};

    if (unloadingStart < loadingEnd) {
      errors['unloadingBeforeLoading'] = 'Unloading cannot be before loading';
    }

    if (loadingStart > loadingEnd) {
      errors['loadingStartAfterEnd'] = 'Loading start time must be before or equal to end time';
    }

    if (unloadingStart > unloadingEnd) {
      errors['unloadingStartAfterEnd'] = 'Unloading start time must be before or equal to end time';
    }

    return Object.keys(errors).length ? errors : null;
  };


}

