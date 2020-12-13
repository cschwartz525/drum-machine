export type Action = {
    payload?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    type: string
};

export const ActionTypes = {
    ADD_TRACK: 'ADD_TRACK',
    DELETE_TRACK: 'DELETE_TRACK',
    PLAY: 'PLAY',
    SET_BPM: 'SET_BPM',
    STOP: 'STOP',
    TOGGLE_BEAT: 'TOGGLE_BEAT'
};

export const addTrack = (): Action => ({
    type: ActionTypes.ADD_TRACK
});

export const deleteTrack = (trackId: string): Action => ({
    type: ActionTypes.DELETE_TRACK,
    payload: { trackId }
})

export const play = (): Action => ({
    type: ActionTypes.PLAY
});

export const setBpm = (bpm: number): Action => ({
    type: ActionTypes.SET_BPM,
    payload: { bpm }
});

export const stop = (): Action => ({
    type: ActionTypes.STOP
});

export const toggleBeat = (index: number, trackId: string): Action => ({
    type: ActionTypes.TOGGLE_BEAT,
    payload: { index, trackId }
});