import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers } from "./reducer";
import { featureKey } from './state';

@NgModule({
    imports: [
        StoreModule.forFeature(featureKey, reducers)
    ]
})
export class CalculatorStoreModule {}