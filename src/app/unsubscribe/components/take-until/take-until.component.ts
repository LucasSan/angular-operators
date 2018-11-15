import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmitValueService } from 'src/app/unsubscribe/emit-value.service';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html'
})
export class TakeUntilComponent implements OnInit, OnDestroy {

  name = 'Componente com takeUntil';
  value: string;

  unsub$ = new Subject();

  constructor(private service: EmitValueService) { }

  ngOnInit() {
    this.service.getValue()
      .pipe(
        tap(v => console.log(this.name, v)),
        takeUntil(this.unsub$)
      )
      .subscribe(novoValor => this.value = novoValor);
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
    console.log(`${this.name} foi destruido`);
  }
}
