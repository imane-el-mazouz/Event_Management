// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { User } from '../../model/user';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import {UserService} from "../../service/user.service";
//
//
// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrl: './user-list.component.scss' ,
//   standalone: true,
//   imports: [CommonModule, RouterOutlet, RouterLink ]
// })
// export class UserListComponent implements OnInit {
//   users: User[] = [];
//
//   constructor(private userService: UserService) { }
//
//   ngOnInit(): void {
//     this.userService.findAll().subscribe(data => {
//       this.users = data;
//     });
//   }
//
//   deleteUser(idU: number): void {
//     this.userService.deleteUser(idU).subscribe(() => {
//       this.users = this.users.filter(user => user.idU !== idU);
//     });
//   }
//   updateUser(idU: number, user: User): void {
//     this.userService.updateUser(idU, user).subscribe(()=> {
//       this.users = this.users.filter(user => user.idU !== idU);
//     });
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { User } from '../../../model/user_model/user';
// import { UserService } from '../../../service/user_service/user.service';
// import {RouterLink} from "@angular/router";
// import {NgForOf} from "@angular/common";
//
// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   standalone: true,
//   imports: [
//     RouterLink,
//     NgForOf
//   ],
//   styleUrls: ['./user-list.component.scss']
// })
// export class UserListComponent implements OnInit {
//   users: User[] = [];
//
//   constructor(private userService: UserService) { }

  // ngOnInit(): void {
  //   this.userService.findAll().subscribe(data => {
  //     this.users = data;
  //   });
  // }
  //
  // deleteUser(idU: number): void {
  //   this.userService.deleteUser(idU).subscribe(() => {
  //     this.users = this.users.filter(user => user.idU !== idU);
  //   });
  // }
  //
  // updateUser(idU: number, user: User): void {
  //   this.userService.updateUser(idU, user).subscribe(() => {
  //     console.log('User updated successfully');
  //   });
  // }

// import {Component, Injectable} from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {User} from "../../model/user";
// import {Account} from "../../model/account";
// import {CommonModule} from "@angular/common";
// import {RouterLink, RouterOutlet} from "@angular/router";
//
//
// @Injectable({
//   providedIn: 'root'
// })
// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrl: './user-list.component.scss' ,
//  standalone: true,
//  imports: [CommonModule, RouterOutlet, RouterLink ]
// })
// export class UserService {
//   deleteAccount(idA: number) {
//     throw new Error('Method not implemented.');
//   }
//   private apiUrl = 'http://localhost:8081/api/user';
//
//   constructor(private http: HttpClient) { }
//
//   findAll(): Observable<User[]> {
//     return this.http.get<User[]>(`${this.apiUrl}/all`);
//   }
//
//   save(user: User): Observable<User> {
//     return this.http.post<User>(this.apiUrl, user);
//   }
//
//   deleteUser(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
//
//   getUser(id: number): Observable<User> {
//     return this.http.get<User>(`${this.apiUrl}/${id}`);
//   }
//
//   updateUser(id: number, user: User): Observable<User> {
//     return this.http.put<User>(`${this.apiUrl}/${id}`, user);
//   }
//
//   getUserAccounts(): Observable<Account[]> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     return this.http.get<Account[]>(`${this.apiUrl}/accounts`, { headers });
//   }

