import { Component, OnInit } from '@angular/core';
import { AbstractOrchestrationElement } from '../state-machine/AbstractOrchestrationElement.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styles: []
})
export class Comp2Component extends AbstractOrchestrationElement implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
