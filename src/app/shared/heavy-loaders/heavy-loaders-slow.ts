import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  imports: [NgClass],
  styles: ``,
    selector:'heavy-loaders-slow',
 template:`
  <section [ngClass]="['w-full h-150', cssClass]">
    Heavy Loader Slow  
    </section>
    `
})
export class HeavyLoadersSlow {
    @Input({required: true}) cssClass!:string ;

  constructor(){
    const start = Date.now();

    while(Date.now() - start < 3000){
    }
    console.log('cargado');
  }
}
