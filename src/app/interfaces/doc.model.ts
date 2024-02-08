import { BudgetDetail } from './doc-detail.model';
import { Client } from './client.model';

export interface Doc {
  id: number;
  name: string;
  detail: BudgetDetail[];
  client: Client;
}
