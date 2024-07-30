import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../service/profile_service/profile.service';
import { AuthService } from '../../../service/auth_service/auth-service.service';
import { User } from '../../../model/user_model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userId: number | null = null;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.userId !== null) {
      this.loadUserProfile();
    } else {
      this.errorMessage = 'User ID not found.';
    }
  }

  loadUserProfile(): void {
    if (this.userId !== null) {
      this.profileService.getUserProfile(this.userId).subscribe(
        (user: User) => {
          console.log('User data:', user); // Debugging line
          this.profileForm.patchValue({
            name: user.name || '',
            phone: user.phone || '',
            address: user.address || ''
          });
        },
        error => {
          console.error('Error loading user profile', error);
          this.errorMessage = 'Error loading user profile.';
        }
      );
    }
  }

  updateProfile(): void {
    if (this.profileForm.valid && this.userId !== null) {
      const updatedUser: Partial<User> = {
        name: this.profileForm.get('name')?.value,
        phone: this.profileForm.get('phone')?.value,
        address: this.profileForm.get('address')?.value
      };
      this.profileService.updateUserProfile(this.userId, updatedUser).subscribe(
        () => {
          this.router.navigate(['/profile']); // Redirect to profile page or show a success message
        },
        error => {
          console.error('Error updating user profile', error);
          this.errorMessage = 'Error updating user profile.';
        }
      );
    }
  }
}
