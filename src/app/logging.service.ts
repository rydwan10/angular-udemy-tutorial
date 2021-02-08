import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logStatusChange(status: string): void {
    console.log(`A account status changed, new status: ${status}`);
  }
}
