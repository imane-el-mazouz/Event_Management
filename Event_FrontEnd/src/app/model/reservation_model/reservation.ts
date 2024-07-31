import {User} from "../user_model/user";
import {Event} from "../event_model/event";

export class Reservation {
  id !: number;
  dateTime !: Date;
  user!: User;
  event! : Event | null;
}
