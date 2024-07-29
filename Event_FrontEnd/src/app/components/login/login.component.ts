import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/user-auth-service.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const { name, password } = this.loginForm.value;
    this.http.post<{ accessToken: string, user: any }>('http://localhost:8081/api/auth/login', { name, password })
      .subscribe(
        response => {
          this.authService.setToken(response.accessToken);
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Error during login', error);
        }
      );
  }
}
