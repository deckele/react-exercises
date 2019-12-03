import { resultConstants } from './result-constants';

export const resultActions = {
    input: (input: string) => ({
        type: resultConstants.NUM_INPUT,
        input
    }),
    reset: () => ({
        type: resultConstants.RESET
    }),
    equal: () => ({
        type: resultConstants.EQUAL
    })
}
