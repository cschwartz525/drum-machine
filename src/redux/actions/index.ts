export type Action = {
    payload?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    type: string
};

export const ActionTypes = {
    SET_BPM: 'SET_BPM'
};

export const setBpm = (bpm: number): Action => ({
    type: ActionTypes.SET_BPM,
    payload: { bpm }
});