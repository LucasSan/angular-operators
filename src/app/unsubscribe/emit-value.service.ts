import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitValueService {

  private emissor$ = new Subject<string>();

  emitValue(value: string): void {
    this.emissor$.next(value);
  }

  getValue(): Observable<string> {
    return this.emissor$.asObservable();
  }
}
