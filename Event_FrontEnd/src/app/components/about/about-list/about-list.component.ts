import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../service/contact_service/contact.service';
import {NgForOf, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-about-list',
  standalone: true,
  templateUrl: './about-list.component.html',
  imports: [
    NgIf,
    NgForOf,
    MatCardModule,

  ],
  styleUrls: ['./about-list.component.scss']
})
export class AboutListComponent implements OnInit {
  about: any[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadAbout();
  }

  loadAbout() {
    this.contactService.getAbout().subscribe({
      next: (about) => this.about = about,
      error: (error) => console.error('Error loading about team and values', error)
    });
  }
}
