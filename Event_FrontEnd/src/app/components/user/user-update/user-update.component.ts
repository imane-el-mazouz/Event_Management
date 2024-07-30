// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
// import {UserService} from "../../../service/user_service/user.service";
//
// @Component({
//   selector: 'app-user-update-form',
//   templateUrl: './user-update.component.html',
//   standalone: true,
//   imports: [
//     ReactiveFormsModule
//   ],
//   styleUrls: ['./user-update.component.scss']
// })
// export class UpdateUserFormComponent implements OnInit {
//   userForm: FormGroup;
//   id: number = 0;
//
//
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private userService: UserService,
//     private fb: FormBuilder
//   ) {
//     this.userForm = this.fb.group({
//       email: ['', Validators.required],
//       name: ['', Validators.required],
//       password: ['', Validators.required],
//       phone: ['', Validators.required],
//       profession: ['', Validators.required]
//
//     });
//   }
//
//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const idParam = params.get('id');
//       this.id = idParam !== null ? +idParam : 0;
//       this.loadUserDetails(this.id);
//     });
//   }
//
//   loadUserDetails(id: number): void {
//     this.userService.getUser(id).subscribe((data) => {
//       this.userForm.patchValue(data);
//     });
//   }
//
//   onSubmit(): void {
//     if (this.userForm.valid) {
//       this.userService.updateUser(this.id, this.userForm.value).subscribe(() => {
//         this.router.navigate(['/users']);
//       });
//     }
//   }
// }
