import { Component, OnInit } from '@angular/core';
import { EmitValueService } from 'src/app/unsubscribe/emit-value.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html'
})
export class TakeComponent implements OnInit {

  name = 'Componente com take';
  value: string;

  constructor(private service: EmitValueService) { }

  ngOnInit() {
    this.service.getValue()
      .pipe(
        tap(v => console.log(this.name, v)),
        take(1)
      )
      .subscribe(novoValor => this.value = novoValor);
  }
}
