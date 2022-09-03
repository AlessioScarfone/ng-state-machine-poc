import { Component } from "@angular/core";
import { availableEventOnState, createStateMachine, EventTransition, IStateMachine, StateMachineDefinition } from "./state-machine-factory";

@Component({ template: '' })
export class AbstractOrchestrator {

    public stateMachine: IStateMachine | undefined;

    constructor() {

    }

    public initStateMachine(stateMachineDef: StateMachineDefinition) {
        this.stateMachine = createStateMachine(stateMachineDef);
    }

    public availableEventOnstate(ev: string): boolean {
        if (this.stateMachine)
            return availableEventOnState(this.stateMachine, ev);
        return false;
    };

    public triggerTransaction(ev: string): void {
        const nextState = this.stateMachine?.transition(this.stateMachine.value, ev);
        console.log("CurrentState:", { transactionRes: nextState, stateMachineCurrentValue: this.stateMachine?.value });
    }

    public onStateMachineEventEmit(event: EventTransition) {
        this.triggerTransaction(event.eventKey);
    }

}