import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmitValueService } from '../../emit-value.service';
import { tap } from 'rxjs/operators';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-none',
    templateUrl: './none.component.html'
})
export class NoneComponent implements OnInit, OnDestroy {

    name = 'Componente sem unsubscribe';
    value: string;

    constructor(private service: EmitValueService) { }

    ngOnInit() {
        this.service.getValue()
            .pipe(tap(v => console.log(this.name, v)))
            .subscribe(novoValor => this.value = novoValor);
    }

    ngOnDestroy() {
        console.log(`${this.name} foi destruido`);
    }
}
