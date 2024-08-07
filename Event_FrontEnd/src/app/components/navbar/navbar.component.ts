import {Component, Inject, inject, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {AsyncPipe, isPlatformBrowser, NgIf, NgOptimizedImage} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../service/auth_service/auth-service.service";

@Component({
  selector: 'app-my-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgIf,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,

  ]
})
export class NavbarComponent implements OnInit{

  constructor(
    private plateformId :AuthService ,
  ) {
  }

  ngOnInit(): void {
        this.isLogin()
    }

  isLogin():boolean{
    if (this.plateformId.getToken()==null){
      return true
    }
    return false
  }

}
