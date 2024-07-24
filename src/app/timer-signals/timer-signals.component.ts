import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  signal,
  type OnInit,
} from '@angular/core';
import { WINDOW } from '../window.inject';

@Component({
  selector: 'app-timer-signals',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Timer on signals and setInterval. Time left: {{ time() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerSignalsComponent implements OnInit, OnDestroy {
  protected time = signal(10);
  private intervalId?: number;

  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit(): void {
    this.intervalId = this.window.setInterval(() => {
      this.time.update((val) => val - 1);
      if (this.time() === 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
