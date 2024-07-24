import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TimerOnpushComponent } from './timer-onpush/timer-onpush.component';
import { TimerSignalsComponent } from './timer-signals/timer-signals.component';
import { TimerRxjsIntervalComponent } from './timer-rxjs-interval/timer-rxjs-interval.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TimerOnpushComponent,
    TimerSignalsComponent,
    TimerRxjsIntervalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-timer-18';
}
