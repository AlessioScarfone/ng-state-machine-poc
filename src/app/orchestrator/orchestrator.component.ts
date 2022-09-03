import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractOrchestrator } from '../state-machine/AbstractOrchestrator.component';

@Component({
  selector: 'app-orchestrator',
  templateUrl: './orchestrator.component.html',
  styles: [
  ]
})
export class OrchestratorComponent extends AbstractOrchestrator implements OnInit {

  public readonly stateDefinition = {
    initialState: 'start',
    states: {
      start: {
        actions: {
          onExit: () => { console.log("Exit from 'start'") }
        },
        transitions: {
          next: {
            target: 'comp1',
            action: () => { console.log('transition action for "next" in "start" state') }
          }
        }
      },
      comp1: {
        transitions: {
          next: {
            target: 'comp2',
            action: () => { console.log('transition action for "next" in "comp1" state') }
          },
          prev: {
            target: 'start',
            action: () => { console.log('transition action for "prev" in "comp1" state') }
          }
        }
      },
      comp2: {
        transitions: {
          next: {
            target: 'end',
            action: () => { console.log('transition action for "next" in "comp2" state') }
          },
          prev: {
            target: 'comp1',
            action: () => { console.log('transition action for "prev" in "comp2" state') }
          }
        }
      },
      end: {
        actions: {
          onEnter: () => {
            console.log('reach end');
            this.router.navigate(['end']);
          }
        }
      }
    }
  }


  constructor(private router: Router) {
    super();
    this.initStateMachine(this.stateDefinition);
  }

  ngOnInit(): void {
    console.log("Orchestrator state machine", this.stateMachine);
  }



}
