import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DocDetail } from '../../interfaces/doc-detail.model';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'doc-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './doc-form.component.html',
  styleUrl: './doc-form.component.scss',
})
export class DocFormComponent {
  _service = inject(FormService);

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
    client: this._service.clientForm,
  });
}
