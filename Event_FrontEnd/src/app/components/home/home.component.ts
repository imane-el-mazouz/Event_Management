// // import { Component, OnInit } from '@angular/core';
// // import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
// // import { EventService } from '../../service/event_service/event.service';
// // import { Event } from '../../model/event_model/event';
// // import { Category } from '../../enums/category';
// // import {DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
// // import {RouterLink, RouterOutlet} from "@angular/router";
// // import {MatInputModule} from "@angular/material/input";
// // import {MatButtonModule} from "@angular/material/button";
// // import {MatSelectModule} from "@angular/material/select";
// // import {MatFormFieldModule} from "@angular/material/form-field";
// // import {MatIconModule} from "@angular/material/icon";
// // import {MatCardModule} from "@angular/material/card";
// // import {MatDatepickerModule} from "@angular/material/datepicker";
// // import {MatListModule} from "@angular/material/list";
// // import {MatDividerModule} from "@angular/material/divider";
// // import {MatLine} from "@angular/material/core";
// // import {NavbarComponent} from "../navbar/navbar.component";
// // import {FooterComponent} from "../footer/footer.component";
// //
// // @Component({
// //   selector: 'app-home',
// //   standalone: true,
// //   imports: [
// //   NgOptimizedImage,
// //   RouterLink,
// //   RouterOutlet,
// //   MatInputModule,
// //   MatButtonModule,
// //   MatSelectModule,
// //   MatFormFieldModule,
// //   MatIconModule,
// //   ReactiveFormsModule,
// //   MatCardModule,
// //   MatDatepickerModule,
// //   MatListModule,
// //   MatDividerModule,
// //   NgForOf,
// //   MatLine,
// //   NavbarComponent,
// //   FooterComponent,
// //   FormsModule,
// //   DatePipe, NgOptimizedImage,
// //
// //   ],
// //   templateUrl: './home.component.html',
// //   styleUrls: ['./home.component.scss']
// // })
// // export class HomeComponent implements OnInit {
// //   searchForm!: FormGroup;
// //   events: Event[] = [];
// //   categories = Object.values(Category);
// //
// //   constructor(
// //     private fb: FormBuilder,
// //     private eventService: EventService
// //   ) {}
// //
// //   ngOnInit(): void {
// //     this.searchForm = this.fb.group({
// //       location: [''],
// //       category: [''],
// //       dateTime: ['']
// //     });
// //
// //     this.loadEvents();
// //   }
// //
// //   onSearch(): void {
// //     const { location, category, dateTime } = this.searchForm.value;
// //     const date = dateTime ? new Date(dateTime) : null;
// //
// //     if (date && isNaN(date.getTime())) {
// //       console.error('Invalid date provided');
// //       return;
// //     }
// //
// //     this.eventService.searchEvents(location, category, date).subscribe(
// //       (events) => this.events = events,
// //       (error) => {
// //         console.error('Error fetching events:', error);
// //         alert('An error occurred while fetching events. Please try again later.');
// //       }
// //     );
// //   }
// //
// //
// //
// //
// //   private loadEvents(): void {
// //     this.eventService.getEvents().subscribe(
// //       (events) => this.events = events,
// //       (error) => console.error('Error loading events', error)
// //     );
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
// import { EventService } from '../../service/event_service/event.service';
// import { Event } from '../../model/event_model/event';
// import { Category } from '../../enums/category';
// import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
// import { RouterLink, RouterOutlet } from "@angular/router";
// import { MatInputModule } from "@angular/material/input";
// import { MatButtonModule } from "@angular/material/button";
// import { MatSelectModule } from "@angular/material/select";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatIconModule } from "@angular/material/icon";
// import { MatCardModule } from "@angular/material/card";
// import { MatDatepickerModule } from "@angular/material/datepicker";
// import { MatListModule } from "@angular/material/list";
// import { MatDividerModule } from "@angular/material/divider";
// import { MatLine } from "@angular/material/core";
// import { NavbarComponent } from "../navbar/navbar.component";
// import { FooterComponent } from "../footer/footer.component";
//
// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [
//     NgOptimizedImage,
//     RouterLink,
//     RouterOutlet,
//     MatInputModule,
//     MatButtonModule,
//     MatSelectModule,
//     MatFormFieldModule,
//     MatIconModule,
//     ReactiveFormsModule,
//     MatCardModule,
//     MatDatepickerModule,
//     MatListModule,
//     MatDividerModule,
//     NgForOf,
//     MatLine,
//     NavbarComponent,
//     FooterComponent,
//     FormsModule,
//     DatePipe,
//     NgIf
//   ],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   searchForm!: FormGroup;
//   events: Event[] = [];
//   eventForm: FormGroup;
//
//   isEditing = false;
//   editingEventId: number | null = null;
//   categories = Object.values(Category);
//   searchPerformed = false;
//
//
//   constructor(
//     private fb: FormBuilder,
//     private eventService: EventService
//   ) {}
//
//   ngOnInit(): void {
//     this.searchForm = this.fb.group({
//       location: [''],
//       category: [''],
//       dateTime: ['']
//
//     });
//     this.eventForm = this.fb.group({
//       name: ['', Validators.required],
//       dateTime: ['', Validators.required],
//       location: ['', Validators.required],
//       category: ['', Validators.required],
//       description: ['']
//     });
//     this.loadEvents();
//   }
//
// //   onSearch(): void {
// //     const { location, category, dateTime } = this.searchForm.value;
// //     const date = dateTime ? new Date(dateTime) : null;
// //
// //     if (date && isNaN(date.getTime())) {
// //       console.error('Invalid date provided');
// //       return;
// //     }
// //
// //     this.eventService.searchEvents(location, category, date).subscribe(
// //       (events) => this.events = events,
// //       (error) => {
// //         console.error('Error fetching events:', error);
// //         alert('An error occurred while fetching events. Please try again later.');
// //       }
// //     );
// //   }
// //
// //   private loadEvents(): void {
// //     this.eventService.getEvents().subscribe(
// //       (events) => this.events = events,
// //       (error) => console.error('Error loading events', error)
// //     );
// //   }
//
// //   onSearch(): void {
// //     const { location, category, dateTime } = this.searchForm.value;
// //     const date = dateTime ? new Date(dateTime) : null;
// //
// //     if (date && isNaN(date.getTime())) {
// //       console.error('Invalid date provided');
// //       return;
// //     }
// //
// //     this.eventService.searchEvents(location, category, date).subscribe(
// //       (events) => {
// //         this.events = events;
// //         this.searchPerformed = true;
// //       },
// //       (error) => {
// //         console.error('Error fetching events:', error);
// //         alert('An error occurred while fetching events. Please try again later.');
// //       }
// //     );
// //   }
// //
//   private loadEvents(): void {
//     this.eventService.getEvents().subscribe(
//       (events) => this.events = events,
//       (error) => console.error('Error loading events', error)
//     );
//   }
//
//   onSearch(): void {
//     const { location, category, date } = this.searchForm.value;
//     const dateTime = date ? new Date(date) : null;
//
//     if (dateTime && isNaN(dateTime.getTime())) {
//       console.error('Invalid date provided');
//       return;
//     }
//
//     this.eventService.searchEvents(location, category, dateTime).subscribe({
//       next: (events) => this.events = events,
//       error: (error) => {
//         console.error('Error fetching events:', error);
//         alert('An error occurred while fetching events. Please try again later.');
//       }
//     });
//   }
//
//   filteredEvents(category: string) {
//     return this.events.filter(event => event.category === category);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventService } from '../../service/event_service/event.service';
import { Event } from '../../model/event_model/event';
import { Category } from '../../enums/category';
import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatLine } from "@angular/material/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import {ReservationService} from "../../service/reservation_service/reservation.service";
import {Reservation} from "../../model/reservation_model/reservation";
import {ContactService} from "../../service/contact_service/contact.service";
import {Contact} from "../../model/contact_model/contact";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatListModule,
    MatDividerModule,
    NgIf,
    MatLine,
    NavbarComponent,
    FooterComponent,
    DatePipe,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reservationForm: FormGroup;
  events: Event[] = [];
  searchForm!: FormGroup;
  eventForm: FormGroup | undefined;
  categories = Object.values(Category);
  isEditing = false;
  editingEventId: number | null = null;
  searchPerformed = false;
  contactForm: FormGroup;
  contacts: Contact[] = [];
  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private eventService: EventService,
    private router: Router,
    private contactService: ContactService,
  ) {
    this.reservationForm = this.fb.group({
      dateTime: ['', Validators.required],
      event: [null, Validators.required]
    });


    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initializeForms();
    this.loadEvents();
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log('Events loaded:', this.events);
    })
    this.contactService.getContacts().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        console.log('Contacts loaded:', this.contacts);
      },
      error: (error) => {
        console.error('Error loading contacts', error);
      }
    });
  }

  private initializeForms(): void {
    this.searchForm = this.fb.group({
      location: [''],
      category: [''],
      dateTime: ['']
    });

    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      dateTime: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],

      description: ['']
    });
  }

  onSearch(): void {
    const { location, category, dateTime } = this.searchForm.value;
    const date = dateTime ? new Date(dateTime) : null;

    if (date && isNaN(date.getTime())) {
      console.error('Invalid date provided');
      return;
    }

    this.eventService.searchEvents(location, category, date).subscribe({
      next: (events) => {
        this.events = events;
        this.searchPerformed = true;
      },
      error: (error) => {
        console.error('Error fetching events:', error);
        alert('An error occurred while fetching events. Please try again later.');
      }
    });
  }
  onSubmit(): void {
    if (this.reservationForm.valid) {
      let reservation = this.reservationForm.value;
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
          alert('An error occurred while saving the reservation. Please try again later.');
        }
      });
    }
    if (this.contactForm.valid) {
      let contact: Contact = this.contactForm.value;
      this.contactService.saveContact(contact).subscribe({
        next: (response) => {
          console.log('Contact saved successfully', response);
          this.router.navigate(['/contacts']);
        },
        error: (error) => {
          console.error('Error during saving contact', error);
          this.router.navigate(['/home']);
        }
      });
    }
  }

  private loadEvents(): void {
    this.eventService.getEvents().subscribe({
      next: (events) => this.events = events,
      error: (error) => console.error('Error loading events', error)
    });
  }

  filteredEvents(category: string): Event[] {
    return this.events.filter(event => event.category === category);
  }


}
