import { BudgetDetail } from './budget-detail.model';
import { Client } from './client.model';

export interface Budget {
  id: number;
  name: string;
  detail: BudgetDetail[];
  client: Client;
}
