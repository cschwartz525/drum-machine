import { Action, ActionTypes } from '../actions';
import { State } from '../state';

export default (state: State, action: Action): State => {
    switch (action.type) {

    case ActionTypes.SET_BPM:
        const {
            payload: {
                bpm
            } = {}
        } = action;

        if (Number.isNaN(bpm)) {
            return state;
        } else if (bpm > 200) {
            return { ...state, bpm: 200 };
        } else if (bpm < 1) {
            return { ...state, bpm: 1 }
        } else {
            return { ...state, bpm };
        }

    default:
        return state;

    }
};