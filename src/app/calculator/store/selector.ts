import { createFeatureSelector, createSelector } from '@ngrx/store';
import { calculatorState, featureKey } from './state';

export const selectCalculadoraFeature = createFeatureSelector<calculatorState>(featureKey);
export const selectNumber = createSelector(selectCalculadoraFeature, (state) => state.number !== null ? state.number : state.memoryNumber);
export const canUseEqual = createSelector(selectCalculadoraFeature, state => !!state.memoryOperator)