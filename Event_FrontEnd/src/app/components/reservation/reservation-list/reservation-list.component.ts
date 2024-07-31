import { Component } from '@angular/core';
import {NavbarComponent} from "../../navbar/navbar.component";
import {NgForOf, NgIf} from "@angular/common";
import {Reservation} from "../../../model/reservation_model/reservation";
import {ReservationService} from "../../../service/reservation_service/reservation.service";

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [
    NavbarComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent {
  reservations : Reservation[] = [];
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getUserReservations().subscribe(
      data => this.reservations= data,
      error => console.error('Error fetching reservations:', error)
    );
  }
}
