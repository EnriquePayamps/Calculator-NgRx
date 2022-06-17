import { createAction, props } from '@ngrx/store';
import { MathematicalOperator } from '../calculator.component';

export const addDigit = createAction('[Calculadora Component] Add digit number', props<{ number: number }>());
export const OperateNumber = createAction('[Calculadora Component] Operate number', props<{ operator: MathematicalOperator }>());