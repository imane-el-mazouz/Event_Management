import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ProfileService } from '../../../service/profile_service/profile.service';
import { User } from '../../../model/user_model/user';
import {DatePipe, NgForOf, NgIf} from "@angular/common"; // Ensure correct import

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    DatePipe,
    NgForOf
  ],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userId: number | null = null;
  currentView: string = 'profile';
  reservations: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {
    this.profileForm = this.fb.group({
      name: [''],
      phone: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID Parameter from Route:', idParam); // Debugging line
    this.userId = idParam ? +idParam : null;
    if (this.userId) {
      this.loadUserProfile();
    } else {
      console.error('User ID is not available');
    }
  }

  loadUserProfile(): void {
    if (this.userId !== null) {
      this.profileService.getUserProfile(this.userId).subscribe({
        next: (user: User) => {
          this.profileForm.patchValue(user);
        },
        error: (error) => {
          console.error('Error loading user profile:', error);
        }
      });
    }
  }

  updateProfile(): void {
    if (this.profileForm.valid && this.userId !== null) {
      this.profileService.updateUserProfile(this.userId, this.profileForm.value).subscribe({
        next: () => {
          console.log('Profile updated successfully');
        },
        error: (error) => {
          console.error('Error updating profile:', error);
        }
      });
    } else {
      console.error('Form is invalid or user ID is missing');
    }
  }

  changeView(view: string): void {
    this.currentView = view;
  }
}
