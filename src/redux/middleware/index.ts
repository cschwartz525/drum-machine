import { Dispatch, Middleware, MiddlewareAPI } from 'redux'
import { Action, ActionTypes, setPlayingIndex } from '../actions';
import { State } from '../state';

let loop: number;

export const playbackMiddleware: Middleware = (
    store: MiddlewareAPI
) => (
    next: Dispatch
) => (
    action: Action
) => {
    const { dispatch, getState } = store;

    if (action.type === ActionTypes.PLAY) {
        const { bpm, tracks }: State = getState();
        const interval = 1000 * 60 / bpm / 4;

        let index = 0;

        loop = setInterval(() => {
            dispatch(setPlayingIndex(index));

            tracks.forEach(track => {
                const beat = track.beats[index];
                if (beat.isEnabled) {
                    const audio = new Audio(track?.sample);
                    audio.play();
                }
            });

            if (index < 15) {
                index++;
            } else {
                index = 0;
            }
        }, interval);
    } else if (action.type === ActionTypes.STOP) {
        clearInterval(loop);
        dispatch(setPlayingIndex());
    }

    return next(action);
};