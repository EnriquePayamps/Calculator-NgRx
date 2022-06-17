import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalculatorStoreModule } from './store';
import { CalculatorComponent } from './calculator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CalculatorStoreModule,
        ReactiveFormsModule,
    ],
    declarations: [CalculatorComponent],
    exports: [ CalculatorComponent, CalculatorStoreModule ]
})
export class CalculatorModule {}