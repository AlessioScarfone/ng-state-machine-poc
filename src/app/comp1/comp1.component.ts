import { Component, OnInit } from '@angular/core';
import { AbstractOrchestrationElement } from '../state-machine/AbstractOrchestrationElement.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styles: [
  ]
})
export class Comp1Component extends AbstractOrchestrationElement implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
