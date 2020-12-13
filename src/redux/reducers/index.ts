import { v4 as uuid } from 'uuid';
import { Action, ActionTypes } from '../actions';
import { Beat, State, Track } from '../state';

export default (state: State, action: Action): State => {
    switch (action.type) {

    case ActionTypes.ADD_TRACK:
        const newTrack: Track = { beats: [], filename: '', id: uuid() }
        const newBeat: Beat = { isEnabled: false };
        for (let i = 0; i < 16; i++) {
            newTrack.beats.push(newBeat);
        }
        state.tracks.push(newTrack);
        return state;

    case ActionTypes.DELETE_TRACK:
        const {
            payload: {
                trackId
            } = {}
        } = action;
        state.tracks = state.tracks.filter(track => track.id !== trackId);
        return state;

    case ActionTypes.PLAY:
        return { ...state, isPlaying: true };

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

    case ActionTypes.STOP:
        return { ...state, isPlaying: false };

    default:
        return state;

    }
};