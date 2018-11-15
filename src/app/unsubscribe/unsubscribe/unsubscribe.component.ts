import { Component, OnInit } from '@angular/core';
import { EmitValueService } from '../emit-value.service';

@Component({
    selector: 'app-unsubscribe-poc',
    templateUrl: './unsubscribe.component.html'
})
export class UnsubscribeComponent implements OnInit {

    mostrarComponentes = true;

    constructor(private service: EmitValueService) { }

    ngOnInit() {
    }

    emitValue(valor: string) {
        this.service.emitValue(valor);
    }

    destruirComponentes() {
        this.mostrarComponentes = !this.mostrarComponentes;
    }

}
