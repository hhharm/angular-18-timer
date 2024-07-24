import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: () => {
    const document = inject(DOCUMENT);
    return document.defaultView!;
  },
});
