import { Dispatch, Middleware, MiddlewareAPI } from 'redux'
import { Action, ActionTypes } from '../actions';
import { State } from '../state';

const loops: number[] = [];

export const playbackMiddleware: Middleware = (
    store: MiddlewareAPI
) => (
    next: Dispatch
) => (
    action: Action
) => {
    const { getState } = store;

    if (action.type === ActionTypes.PLAY) {
        const { bpm, tracks }: State = getState();
        const interval = 1000 * 60 / bpm / 4;

        tracks.forEach(track => {
            let index = 0;
            const loop = setInterval(() => {
                const beat = track.beats[index];
                if (beat.isEnabled) {
                    const audio = new Audio(track?.sample);
                    audio.play();
                }
                if (index < 15) {
                    index++;
                } else {
                    index = 0;
                }
            }, interval);

            loops.push(loop);
        });
    } else if (action.type === ActionTypes.STOP) {
        loops.forEach(loop => clearInterval(loop));
    }

    return next(action);
};