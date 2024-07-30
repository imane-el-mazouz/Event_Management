import { Category } from "../../enums/category";
import { Reservation } from "../reservation_model/reservation";

export class Event {
  idE!: number;
  name!: string;
  description!: string;
  dateTime!: Date;
  location!: string;
  capacity!: number;
  category!: Category;
  reservations!: Reservation[];
}
