import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  type OnInit,
} from '@angular/core';
import { WINDOW } from '../window.inject';

@Component({
  selector: 'app-timer-onpush',
  standalone: true,
  imports: [CommonModule],
  template: `<p>
    OnPush component with SetInterval and markForCheck. Time left: {{ time }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerOnpushComponent implements OnInit, OnDestroy {
  private intervalId?: number;
  protected time: number = 10;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit(): void {
    this.intervalId = this.window.setInterval(() => {
      this.time -= 1;
      if (this.time === 0) {
        clearInterval(this.intervalId);
      }
      this.cdr.markForCheck();
    }, 1000) as unknown as number;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
