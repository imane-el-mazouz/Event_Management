import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../../service/contact_service/contact.service';
import { Contact } from '../../../model/contact_model/contact';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contacts: Contact[] = [];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
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

  onSubmit(): void {
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
}
