import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardService } from '../../service/dashboard-service/dashboard.service';
import { ReservationListComponent } from "../reservation/reservation-list/reservation-list.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReservationListComponent,
    RouterLink
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  data:any
  constructor(private dashService: DashboardService){}
  ngOnInit(): void {
    this.loadData()
    console.log(this.loadData());
    
  }
  loadData(){
    this.dashService.getDashboardData().subscribe(
      data=> this.data=data
    )

  }

}
