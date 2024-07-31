import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../../../service/reservation_service/reservation.service';
import { EventService } from '../../../service/event_service/event.service';
import { Event } from '../../../model/event_model/event';
import { Reservation } from '../../../model/reservation_model/reservation';
import { NavbarComponent } from "../../navbar/navbar.component";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavbarComponent,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup;
  events: Event[] = [];

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private eventService: EventService,
    private router: Router
  ) {
    this.reservationForm = this.fb.group({
      dateTime: ['', Validators.required],
      event: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log('Events loaded:', this.events);
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let selectedEvent = this.events.find(event => event.idE === this.reservationForm.get('event')?.value?.idE);
      console.log('Selected event:', selectedEvent);
      reservation.event = selectedEvent || null;

      this.reservationService.saveReservation(reservation).subscribe({
        next: (response) => {
          console.log('Reservation saved successfully', response);
          this.router.navigate(['/reservations']);
        },
        error: (error) => {
          console.error('Error during saving reservation', error);
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
