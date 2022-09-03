import { Component, EventEmitter, Input, Output } from "@angular/core";
import { EventTransition } from "./state-machine-factory";

@Component({ template: '' })
export class AbstractOrchestrationElement {

    @Input() stateName: string = "";
    @Output() stateMachineEventEmit: EventEmitter<EventTransition> = new EventEmitter();

    constructor() {

    }

    emitTransactionEvent(ev: string) {
        this.stateMachineEventEmit.emit({eventKey: ev, stateLabel: this.stateName})
    }

}