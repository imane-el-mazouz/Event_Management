import {Role} from "../../enums/role";
import {Reservation} from "../reservation_model/reservation";

export class User {
  idU!: number;
  name!: string;
  username!: string;
  password!: string;
  phone!: string;
  address!: string;
  role!: Role ;
  reservations!: Reservation[];

}
