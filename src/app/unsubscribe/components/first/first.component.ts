import { Component, OnInit } from '@angular/core';
import { EmitValueService } from 'src/app/unsubscribe/emit-value.service';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  name = 'Componente com first';
  value: string;

  constructor(private service: EmitValueService) { }

  ngOnInit() {
    this.service.getValue()
      .pipe(
        tap(v => console.log(this.name, v)),
        first()
      )
      .subscribe(novoValor => this.value = novoValor);
  }
}
