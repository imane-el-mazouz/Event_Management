import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../../service/event_service/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor,CommonModule,ReactiveFormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {

  events: any[] = [];
  searchForm: FormGroup;
  eventForm: FormGroup;
  isEditing = false;
  editingEventId: number | null = null;

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

  onSearch() {
    const { category, location, date } = this.searchForm.value;
    this.eventService.searchEvents(category, location, date).subscribe({
      next: (events) => this.events = events,
      error: (error) => console.error('Error searching events', error)
    });
  }

  // onSubmit() {
  //   if (this.eventForm.valid) {
  //     if (this.isEditing) {
  //       this.eventService.update(this.editingEventId!, this.eventForm.value).subscribe({
  //         next: () => {
  //           this.loadEvents();
  //           this.resetForm();
  //         },
  //         error: (error) => console.error('Error updating event', error)
  //       });
  //     } else {
  //       this.eventService.create(this.eventForm.value).subscribe({
  //         next: () => {
  //           this.loadEvents();
  //           this.resetForm();
  //         },
  //         error: (error) => console.error('Error creating event', error)
  //       });
  //     }
  //   }
  // }

  // onEdit(event: any) {
  //   this.isEditing = true;
  //   this.editingEventId = event.idE;
  //   this.eventForm.patchValue(event);
  // }
  //
  // onDelete(id: number) {
  //   if (confirm('Are you sure you want to delete this event?')) {
  //     this.eventService.delete(id).subscribe({
  //       next: () => this.loadEvents(),
  //       error: (error) => console.error('Error deleting event', error)
  //     });
  //   }
  // }

  resetForm() {
    this.isEditing = false;
    this.editingEventId = null;
    this.eventForm.reset();
  }
}
