import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './store/actions';
import { selectNumber, canUseEqual } from './store/selector';

export type MathematicalOperator = "AC" | "+" | "-" | "/" | "*" | "=";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  numbers = [...new Array(10).keys()].reverse();
  operators: MathematicalOperator[] = ["AC", "+", "-", "/", "*", "="];
  layout: any[] = [];
  input$ = this.store.select(selectNumber);
  canUseEqual$ = this.store.select(canUseEqual);

  constructor(private store: Store<any>) {
    this.calcLayout();
  }
  
  onButtonClick(value: MathematicalOperator | number) {
    if(isNaN(value as number)) {
      this.store.dispatch(actions.OperateNumber({ operator: value as MathematicalOperator }))
    }
    else{
      this.store.dispatch(actions.addDigit({ number: value as number }));
    }
  }

  private calcLayout() {
    const useOperators = Math.ceil(this.numbers.length / 3);
    const leftOverOperators = this.operators.length - useOperators;

    this.layout = [...this.operators.slice(0, leftOverOperators)];
    const availableOperators = this.operators.slice(leftOverOperators, this.operators.length);

    for(let i = 0; i < this.numbers.length; i++) {
      if(i % 3 == 0 && i != 0) this.layout.push(availableOperators[(i % 3) + (i / 3) - 1]);
      this.layout.push(this.numbers[i]);
    }

    if(this.numbers.length % 3 !== 0) {
      this.layout.push(this.operators[this.operators.length - 1]);
    }
  }
}
