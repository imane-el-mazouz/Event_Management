import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Event_FrontEnd';
}
