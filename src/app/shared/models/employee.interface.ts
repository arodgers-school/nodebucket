import { Item } from "./item.interface";

export interface Employee {
  empId: string;
  task: Item[];
  todo: Item[];
  done: Item[];
}
