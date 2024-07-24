import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-timer-rxjs-interval',
  standalone: true,
  imports: [CommonModule],
  template: `<p>
    Timer on rx-js interval and signals. Time left: {{ time() }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerRxjsIntervalComponent implements OnInit {
  protected time = signal(10);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    interval(1000)
      .pipe(
        take(10),
        takeUntilDestroyed(this.destroyRef),
        tap(() => {
          this.time.update((val) => val - 1);
        })
      )
      .subscribe();
  }
}
