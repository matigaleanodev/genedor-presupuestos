import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  directionForm = new FormGroup({
    id: new FormControl<number>({
      value: 0,
      disabled: true,
    }),
    street: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
    number: new FormControl<number>(0, [Validators.required]),
    zipCode: new FormControl<number>(0, [Validators.required]),
    city: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
    province: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
  });

  phoneForm = new FormGroup({
    id: new FormControl<number>({
      value: 0,
      disabled: true,
    }),
    areaCode: new FormControl<number>(0, [Validators.required]),
    number: new FormControl<number>(0, [Validators.required]),
  });

  clientForm = new FormGroup({
    id: new FormControl<number>({
      value: 0,
      disabled: true,
    }),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    direction: this.directionForm,
    phone: this.phoneForm,
  });
}
