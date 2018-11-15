import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmitValueService } from '../../emit-value.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html'
})
export class AsyncComponent implements OnInit, OnDestroy {

  name = 'Componente com async';
  value$: Observable<string>;

  constructor(private service: EmitValueService) { }

  ngOnInit() {
    this.value$ = this.service.getValue()
      .pipe(tap(v => console.log(this.name, v)));
  }

  ngOnDestroy() {
    console.log(`${this.name} foi destruido`);
  }
}
