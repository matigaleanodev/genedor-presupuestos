import { DocDetail } from './doc-detail.model';
import { Client } from './client.model';

export interface Doc {
  id: number;
  name: string;
  detail: DocDetail[];
  client: Client;
}
