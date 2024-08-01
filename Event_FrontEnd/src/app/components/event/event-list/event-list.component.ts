import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../../service/event_service/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: any[] = [];
  searchForm: FormGroup;
  eventForm: FormGroup;
  isEditing = false;
  editingEventId: number | null = null;
  categories: string[] = ['FESTIVAL', 'SPORTS', 'CONFERENCE', 'WORKSHOP'];
  constructor(
    private eventService: EventService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      category: [''],
      location: [''],
      date: ['']
    });

    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      dateTime: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (events) => this.events = events,
      error: (error) => console.error('Error loading events', error)
    });
  }

  onSearch(): void {
    const { location, category, date } = this.searchForm.value;
    const dateTime = date ? new Date(date) : null;

    if (dateTime && isNaN(dateTime.getTime())) {
      console.error('Invalid date provided');
      return;
    }

    this.eventService.searchEvents(location, category, dateTime).subscribe({
      next: (events) => this.events = events,
      error: (error) => {
        console.error('Error fetching events:', error);
        alert('An error occurred while fetching events. Please try again later.');
      }
    });
  }




}
