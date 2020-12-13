export type Action = {
    payload?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    type: string
};

export const ActionTypes = {
    PLAY: 'PLAY',
    SET_BPM: 'SET_BPM',
    STOP: 'STOP'
};

export const setBpm = (bpm: number): Action => ({
    type: ActionTypes.SET_BPM,
    payload: { bpm }
});

export const play = (): Action => ({
    type: ActionTypes.PLAY
})

export const stop = (): Action => ({
    type: ActionTypes.STOP
})