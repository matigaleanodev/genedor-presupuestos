export interface Client {
  id: number;
  name: string;
  direction: Direction;
  phone: Phone;
}

export type Clients = Client[];

export interface Direction {
  id: number;
  street: string;
  address: number;
  zipCode: number;
  city: string;
  province: string;
}

export interface Phone {
  id: number;
  areaCode: number;
  number: number;
}
