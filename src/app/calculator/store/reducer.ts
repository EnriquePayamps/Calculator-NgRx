import { createReducer, on, State } from "@ngrx/store";
import * as actions from './actions'
import { initialState, calculatorState } from './state';

export const reducers = createReducer(
  initialState,
  on(actions.addDigit, (state, { number }) => ({ 
    ...state,
    number: +`${state.number ?? ''}${number}`
  })),
  on(actions.OperateNumber, (state, { operator }) => {
    let newState: calculatorState;

    if(operator === "="){
      newState = {
        ...state, 
        memoryOperator : null,
        number: eval(`${state.memoryNumber} ${state.memoryOperator ?? operator} ${state.number ?? 0}`)
      };
    }
    else if(operator == "AC") {
      newState = {
        ...state, 
        memoryOperator : null,
        number: null,
        memoryNumber: 0
      };
    }
    else {
      newState = {
        ...state, 
        memoryOperator : operator,
        memoryNumber: state.memoryOperator === null ? state.number : eval(`${state.memoryNumber} ${state.memoryOperator ?? operator} ${state.number ?? 0}`),
        number: null,
      };
    }

   return newState; 
  })
)