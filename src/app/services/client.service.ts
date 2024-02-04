import { Injectable, effect, signal } from '@angular/core';
import { Client } from '../interfaces/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clients = signal<Client[]>(this.getClients());

  constructor() {
    effect(() => {
      const clients = this.clients();
      localStorage.setItem('clients', JSON.stringify(clients));
    });
  }

  getClients(): Array<Client> {
    const storedClients: Client[] = JSON.parse(
      localStorage.getItem('clients') || '[]'
    );
    return storedClients;
  }

  postClient(newClient: Client): void {
    this.clients.update((clients) => {
      clients.push(newClient);
      this.setIds(clients);
      return clients;
    });
  }

  updateClient(editedClient: Client): void {
    this.clients.update((clients) => {
      const oldClient = clients.find((i) => i.id === editedClient.id);
      if (oldClient) {
        Object.assign(oldClient, editedClient);
      } else {
        console.error('no se encontró el elemento');
      }
      return clients;
    });
  }

  deleteClient(id: number): void {
    this.clients.update((clients) => clients.filter((i) => i.id !== id));
  }

  setIds(list: Array<Client>): void {
    list.forEach((i) => (i.id = list.length + 1));
  }
}
