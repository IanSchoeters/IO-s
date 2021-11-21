export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Io {
  id: number;
  io: number;
  linenumber: number;
  article: string;
  username: string;
  dateToday: string;
  supplier: string;
  phoneSupplier: string;
  deliveryDate: string;
}
