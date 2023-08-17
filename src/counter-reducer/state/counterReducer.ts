import { CounterAction } from "../actions/actions";
import { Counterstate } from "../interfaces/interfaces";

export const counterReducer = (state:Counterstate, action: CounterAction): Counterstate  => {
    const {changes, counter } = state;
    
    switch (action.type) {
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0
            }
        case 'increaseBy':
             return {
                changes: changes + 1,
                counter: counter + action.payload.value,
                previous: counter
            }
        default:
            return state;
    }
  }