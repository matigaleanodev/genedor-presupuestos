import { Component, LOCALE_ID } from '@angular/core';
import { Docs } from '../../interfaces/doc.model';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-AR');

@Component({
  selector: 'home',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  docList: Docs = [];

  today = new Date();
}
