import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { OnluNumberDirective } from './onlu-number.directive';



@NgModule({
  declarations: [SharedComponent, OnluNumberDirective],
  imports: [
    CommonModule
  ],
  entryComponents:[SharedComponent],
  exports:[
    SharedComponent,OnluNumberDirective
  ]
})
export class SharedModule { }
