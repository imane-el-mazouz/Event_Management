// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { EventService } from '../../service/event_service/event.service';
// import { Event } from '../../model/event_model/event';
// import { Category } from '../../enums/category';
// import {DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
// import {RouterLink, RouterOutlet} from "@angular/router";
// import {MatInputModule} from "@angular/material/input";
// import {MatButtonModule} from "@angular/material/button";
// import {MatSelectModule} from "@angular/material/select";
// import {MatFormFieldModule} from "@angular/material/form-field";
// import {MatIconModule} from "@angular/material/icon";
// import {MatCardModule} from "@angular/material/card";
// import {MatDatepickerModule} from "@angular/material/datepicker";
// import {MatListModule} from "@angular/material/list";
// import {MatDividerModule} from "@angular/material/divider";
// import {MatLine} from "@angular/material/core";
// import {NavbarComponent} from "../navbar/navbar.component";
// import {FooterComponent} from "../footer/footer.component";
//
// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [
//   NgOptimizedImage,
//   RouterLink,
//   RouterOutlet,
//   MatInputModule,
//   MatButtonModule,
//   MatSelectModule,
//   MatFormFieldModule,
//   MatIconModule,
//   ReactiveFormsModule,
//   MatCardModule,
//   MatDatepickerModule,
//   MatListModule,
//   MatDividerModule,
//   NgForOf,
//   MatLine,
//   NavbarComponent,
//   FooterComponent,
//   FormsModule,
//   DatePipe, NgOptimizedImage,
//
//   ],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   searchForm!: FormGroup;
//   events: Event[] = [];
//   categories = Object.values(Category);
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
//     });
//
//     this.loadEvents();
//   }
//
//   onSearch(): void {
//     const { location, category, dateTime } = this.searchForm.value;
//     const date = dateTime ? new Date(dateTime) : null;
//
//     if (date && isNaN(date.getTime())) {
//       console.error('Invalid date provided');
//       return;
//     }
//
//     this.eventService.searchEvents(location, category, date).subscribe(
//       (events) => this.events = events,
//       (error) => {
//         console.error('Error fetching events:', error);
//         alert('An error occurred while fetching events. Please try again later.');
//       }
//     );
//   }
//
//
//
//
//   private loadEvents(): void {
//     this.eventService.getEvents().subscribe(
//       (events) => this.events = events,
//       (error) => console.error('Error loading events', error)
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../service/event_service/event.service';
import { Event } from '../../model/event_model/event';
import { Category } from '../../enums/category';
import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
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
    NgForOf,
    MatLine,
    NavbarComponent,
    FooterComponent,
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;
  events: Event[] = [];
  categories = Object.values(Category);
  searchPerformed = false;


  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      location: [''],
      category: [''],
      dateTime: ['']
    });

    this.loadEvents();
  }

//   onSearch(): void {
//     const { location, category, dateTime } = this.searchForm.value;
//     const date = dateTime ? new Date(dateTime) : null;
//
//     if (date && isNaN(date.getTime())) {
//       console.error('Invalid date provided');
//       return;
//     }
//
//     this.eventService.searchEvents(location, category, date).subscribe(
//       (events) => this.events = events,
//       (error) => {
//         console.error('Error fetching events:', error);
//         alert('An error occurred while fetching events. Please try again later.');
//       }
//     );
//   }
//
//   private loadEvents(): void {
//     this.eventService.getEvents().subscribe(
//       (events) => this.events = events,
//       (error) => console.error('Error loading events', error)
//     );
//   }

  onSearch(): void {
    const { location, category, dateTime } = this.searchForm.value;
    const date = dateTime ? new Date(dateTime) : null;

    if (date && isNaN(date.getTime())) {
      console.error('Invalid date provided');
      return;
    }

    this.eventService.searchEvents(location, category, date).subscribe(
      (events) => {
        this.events = events;
        this.searchPerformed = true;
      },
      (error) => {
        console.error('Error fetching events:', error);
        alert('An error occurred while fetching events. Please try again later.');
      }
    );
  }

  private loadEvents(): void {
    this.eventService.getEvents().subscribe(
      (events) => this.events = events,
      (error) => console.error('Error loading events', error)
    );
  }
}
