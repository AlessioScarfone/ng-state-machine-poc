export interface StateMachineDefinition {
    initialState: string,
    states: {
        [stateName: string]: State,
    }
}

export interface State {
    actions?: {
        onEnter?: () => void
        onExit?: () => void
    },
    transitions?: {
        [eventName: string]: {
            target: string,
            action?: () => void
        }
    }
}

export interface EventTransition {
    eventKey: string,
    stateLabel?: string, //nome dello stato corrente (utile per log)
}

export interface IStateMachine {
    value: string;
    transition: (currentState: string, event: string) => void,
    structure: StateMachineDefinition;
}

const createStateMachine = (stateMachineDefinition: StateMachineDefinition): IStateMachine => {
    const machine: IStateMachine = {
        structure: stateMachineDefinition,
        value: stateMachineDefinition.initialState,
        transition: (currentState: string, event: string): string | undefined => {
            const currentStateDefinition = stateMachineDefinition.states[currentState]
            const destinationTransition = currentStateDefinition?.transitions?.[event]
            if (!destinationTransition) {
                return
            }
            const destinationState = destinationTransition.target
            const destinationStateDefinition =
                stateMachineDefinition.states[destinationState]

            destinationTransition?.action?.()
            currentStateDefinition?.actions?.onExit?.()
            destinationStateDefinition?.actions?.onEnter?.()

            machine.value = destinationState

            return machine.value
        },
    }

    return machine
}

export const extractStateList = (machineDef: StateMachineDefinition): string[] => {
    return Object.keys(machineDef?.states);
}

export const extractTransactionMap = (machineDef: StateMachineDefinition): Map<string, string[]> => {
    const transactionMap = new Map<string, string[]>()
    for (const key in machineDef.states) {
        transactionMap.set(key, Object.keys(machineDef.states[key]?.transitions || {}));
    }
    return transactionMap
}

export const availableEventOnState = (machine: IStateMachine, event: string) => {
    return machine?.structure?.states?.[machine.value]?.transitions?.[event] != undefined
}

export { createStateMachine }