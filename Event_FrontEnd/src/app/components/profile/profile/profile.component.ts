// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../../service/auth_service/auth-service.service';
// import { ProfileService } from '../../../service/profile_service/profile.service';
// import { User } from '../../../model/user_model/user';
// import { Reservation } from '../../../model/reservation_model/reservation';
// import {DatePipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
//
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   standalone: true,
//   imports: [
//     DatePipe,
//     NgForOf,
//     NgSwitchCase,
//     ReactiveFormsModule,
//     NgSwitch,
//     NgIf
//   ],
//   styleUrls: ['./profile.component.scss']
// })
// export class ProfileComponent implements OnInit {
//   profileForm: FormGroup;
//   userId: number | null = null;
//   userInfo: User | null = null;
//   reservations: Reservation[] = [];
//   errorMessage: string = '';
//   currentView: string = 'profile'; // Default view
//
//   constructor(
//     private fb: FormBuilder,
//     private profileService: ProfileService,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.profileForm = this.fb.group({
//       name: ['', Validators.required],
//       phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
//       address: ['', Validators.required]
//     });
//   }
//
//   ngOnInit(): void {
//     this.userId = this.authService.getUserId();
//     if (this.userId !== null) {
//       this.loadUserProfile();
//       this.loadUserReservations();
//     } else {
//       this.errorMessage = 'User ID not found.';
//     }
//   }
//
//   loadUserProfile(): void {
//     if (this.userId !== null) {
//       this.profileService.getUserProfile(this.userId).subscribe(
//         (user: User) => {
//           this.userInfo = user;
//           this.profileForm.patchValue({
//             name: user.name || '',
//             phone: user.phone || '',
//             address: user.address || ''
//           });
//         },
//         error => {
//           console.error('Error loading user profile', error);
//           this.errorMessage = 'Error loading user profile.';
//         }
//       );
//     }
//   }
//
//   loadUserReservations(): void {
//     if (this.userId !== null) {
//       this.profileService.getUserReservations(this.userId).subscribe(
//         (reservations: Reservation[]) => {
//           this.reservations = reservations;
//         },
//         error => {
//           console.error('Error loading user reservations', error);
//           this.errorMessage = 'Error loading user reservations.';
//         }
//       );
//     }
//   }
//
//   updateProfile(): void {
//     if (this.profileForm.valid && this.userId !== null) {
//       const updatedUser: Partial<User> = this.profileForm.value;
//       this.profileService.updateUserProfile(this.userId, updatedUser).subscribe(
//         () => {
//           this.loadUserProfile(); // Reload profile info after update
//         },
//         error => {
//           this.errorMessage = 'Error updating user profile.';
//         }
//       );
//     }
//   }
//
//   changeView(view: string): void {
//     this.currentView = view;
//     if (view === 'profile') {
//       this.loadUserProfile(); // Reload profile info
//     } else if (view === 'reservations') {
//       this.loadUserReservations(); // Reload reservations
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth_service/auth-service.service';
import { ProfileService } from '../../../service/profile_service/profile.service';
import { User } from '../../../model/user_model/user';
import { Reservation } from '../../../model/reservation_model/reservation';
import {DatePipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [
    DatePipe,
    ReactiveFormsModule,
    NgSwitchCase,
    NgForOf,
    NgIf,
    NgSwitch
  ],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userId: number | null = null;
  userInfo: User | null = null;
  reservations: Reservation[] = [];
  errorMessage: string = '';
  currentView: string = 'profile';

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    if (this.userId !== null) {
      this.loadUserProfile();
      this.loadUserReservations();
    } else {
      this.errorMessage = 'User ID not found.';
    }
  }

  loadUserProfile(): void {
    if (this.userId !== null) {
      this.profileService.getUserProfile(this.userId).subscribe(
        (user: User) => {
          this.userInfo = user;
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

  loadUserReservations(): void {
    if (this.userId !== null) {
      this.profileService.getUserReservations(this.userId).subscribe(
        (reservations: Reservation[]) => {
          this.reservations = reservations;
        },
        error => {
          console.error('Error loading user reservations', error);
          this.errorMessage = 'Error loading user reservations.';
        }
      );
    }
  }

  updateProfile(): void {
    if (this.profileForm.valid && this.userId !== null) {
      const updatedUser: Partial<User> = this.profileForm.value;
      this.profileService.updateUserProfile(this.userId, updatedUser).subscribe(
        () => {
          this.loadUserProfile();
        },
        error => {
          this.errorMessage = 'Error updating user profile.';
        }
      );
    }
  }

  changeView(view: string): void {
    this.currentView = view;
    if (view === 'profile') {
      this.loadUserProfile();
    } else if (view === 'reservations') {
      this.loadUserReservations();
    }
  }
}