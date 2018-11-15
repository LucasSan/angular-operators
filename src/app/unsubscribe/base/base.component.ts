import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html'
})
export class BaseComponent implements OnInit {

  @Input() name: string;
  @Input() value: string;
  @Input() stylecss: string;

  constructor() { }

  ngOnInit() {
  }
}
