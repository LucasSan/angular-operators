import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRxjsRoutingModule } from './unsubscribe.routing';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { AsyncComponent } from './components/async/async.component';
import { TakeUntilComponent } from './components/take-until/take-until.component';
import { TakeComponent } from './components/take/take.component';
import { NoneComponent } from './components/none/none.component';
import { FirstComponent } from './components/first/first.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ],
  declarations: [
    UnsubscribeComponent,
    AsyncComponent,
    TakeUntilComponent,
    TakeComponent,
    NoneComponent,
    FirstComponent,
    BaseComponent
  ]
})
export class UnsubscribeRxjsModule {}
