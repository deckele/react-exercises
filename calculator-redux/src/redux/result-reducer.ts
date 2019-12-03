import { Reducer } from "redux";
import { resultConstants } from './result-constants';
import { evalCalcResult } from '../utils/calculations';

export interface ResultState {
    result: string;
    resetNextClick: boolean;
}

const initialResultState: ResultState = { 
    result: "" ,
    resetNextClick: false
};

export const resultState: Reducer<ResultState> =  (resultState = initialResultState, action) => {
    switch(action.type) {
        case resultConstants.NUM_INPUT:
            if (resultState.resetNextClick) {
                return {
                    ...resultState,
                    resetNextClick: false,
                    result: action.input
                }
            } else {
                return {
                    ...resultState,
                    result: resultState.result + action.input
                }
            }
        case resultConstants.EQUAL:
            return {
                ...resultState,
                resetNextClick: true,
                result: evalCalcResult(resultState.result)
            }
        case resultConstants.RESET:
            return {
                ...resultState,
                resetNextClick: false,
                result: ""
            }
        default:
            return resultState;
    }
}