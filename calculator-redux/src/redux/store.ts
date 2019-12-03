import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { resultState, ResultState } from './result-reducer';

export interface AppState {
    resultState: ResultState;
}

const rootReducer = combineReducers<AppState>({
    resultState
});
const middleware = applyMiddleware(createLogger());


export const store = createStore(rootReducer, middleware); 