import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DocDetail } from '../../interfaces/doc-detail.model';
import { FormService } from '../../services/form.service';
import { Clients } from '../../interfaces/client.model';
import { DocService } from '../../services/doc.service';

@Component({
  selector: 'doc-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './doc-form.component.html',
  styleUrl: './doc-form.component.scss',
})
export class DocFormComponent {
  private _service = inject(FormService);
  private _docService = inject(DocService);

  amountTypes = this._docService.amountTypeList;

  clients: Clients = [
    {
      id: 1,
      name: 'Cliente 1',
      direction: {
        id: 1,
        street: '',
        address: 1,
        zipCode: 1,
        city: '',
        province: '',
      },
      phone: { id: 1, areaCode: 1, number: 1 },
    },
    {
      id: 2,
      name: 'Cliente 2',
      direction: {
        id: 1,
        street: '',
        address: 1,
        zipCode: 1,
        city: '',
        province: '',
      },
      phone: { id: 1, areaCode: 1, number: 1 },
    },
    {
      id: 3,
      name: 'Cliente 3',
      direction: {
        id: 1,
        street: '',
        address: 1,
        zipCode: 1,
        city: '',
        province: '',
      },
      phone: { id: 1, areaCode: 1, number: 1 },
    },
  ];

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
    client: new FormControl<number>(1, [Validators.required]),
  });

  addClient() {}
}
