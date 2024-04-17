import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doc } from '../../interfaces/doc.model';
import { DocDetail } from '../../interfaces/doc-detail.model';
import { Client } from '../../interfaces/client.model';

@Component({
  selector: 'app-doc-form',
  standalone: true,
  imports: [],
  templateUrl: './doc-form.component.html',
  styleUrl: './doc-form.component.scss',
})
export class DocFormComponent {
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

  form = new FormGroup({
    id: new FormControl<number>({
      value: 0,
      disabled: true,
    }),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    detail: new FormControl<DocDetail[]>(
      [],
      [Validators.required, Validators.minLength(1)]
    ),
    client: this.clientForm,
  });
}
