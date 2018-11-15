import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitValueService {

  private emissor$ = new Subject<string>();

  emitValue(value: string) {
    this.emissor$.next(value);
  }

  getValue() {
    return this.emissor$.asObservable();
  }

}
