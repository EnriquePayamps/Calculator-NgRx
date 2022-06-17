
export const featureKey = "calculator";

export interface calculatorState {
    number: number | null;
    memoryNumber:number;
    memoryOperator: string | null;
}

export const initialState: calculatorState = {
    number: null,
    memoryNumber: 0,
    memoryOperator: null
};
