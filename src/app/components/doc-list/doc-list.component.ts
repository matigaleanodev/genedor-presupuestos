import { Component, Input, LOCALE_ID } from '@angular/core';
import { Docs } from '../../interfaces/doc.model';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-AR');

@Component({
  selector: 'doc-list',
  standalone: true,
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './doc-list.component.html',
  styleUrl: './doc-list.component.scss',
})
export class DocListComponent {
  @Input() docs: Docs = [];
  today = new Date();
}
