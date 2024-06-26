import { Component } from '@angular/core';
import { Docs } from '../../interfaces/doc.model';
import { DocListComponent } from '../doc-list/doc-list.component';
import { DocFormComponent } from '../doc-form/doc-form.component';

type ViewMode = 'onForm' | 'onList' | 'onDoc';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [DocListComponent, DocFormComponent],
})
export class HomeComponent {
  docList: Docs = [];

  viewMode: ViewMode = 'onList';

  onNewDoc() {
    this.viewMode = 'onForm';
  }
}
