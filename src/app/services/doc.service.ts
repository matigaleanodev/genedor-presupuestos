import { Injectable, effect, signal } from '@angular/core';
import { AmountType } from '../interfaces/doc-detail.model';
import { Doc } from '../interfaces/doc.model';

@Injectable({
  providedIn: 'root',
})
export class DocService {
  amountTypeList = signal<Array<AmountType>>(AmountTypeList);
  docs = signal<Doc[]>(this.getDocs());

  constructor() {
    effect(() => {
      const docs = this.docs();
      localStorage.setItem('Docs', JSON.stringify(docs));
    });
  }

  getDocs(): Array<Doc> {
    const storedDocs: Doc[] = JSON.parse(localStorage.getItem('Docs') || '[]');
    return storedDocs;
  }

  postBoc(newBoc: Doc): void {
    this.docs.update((docs) => {
      docs.push(newBoc);
      this.setIds(docs);
      return docs;
    });
  }

  updateBoc(editedDoc: Doc): void {
    this.docs.update((docs) => {
      const oldBoc = docs.find((i) => i.id === editedDoc.id);
      if (oldBoc) {
        Object.assign(oldBoc, editedDoc);
      } else {
        console.error('no se encontró el elemento');
      }
      return docs;
    });
  }

  deleteBoc(id: number): void {
    this.docs.update((docs) => docs.filter((i) => i.id !== id));
  }

  setIds(list: Array<Doc>): void {
    list.forEach((i) => (i.id = list.length + 1));
  }
}

const AmountTypeList: Array<AmountType> = [
  { id: 1, name: 'litros', symbol: 'L' },
  { id: 2, name: 'centímetros cúbicos', symbol: 'cm³' },
  { id: 3, name: 'metros', symbol: 'm' },
  { id: 4, name: 'kilogramos', symbol: 'kg' },
  { id: 5, name: 'gramos', symbol: 'g' },
  { id: 6, name: 'mililitros', symbol: 'ml' },
  { id: 7, name: 'pulgadas', symbol: 'in' },
  { id: 8, name: 'milímetros', symbol: 'mm' },
  { id: 9, name: 'unidades', symbol: 'u' },
];
