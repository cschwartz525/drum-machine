import { produce } from 'immer';
import { v4 as uuid } from 'uuid';
import { Action, ActionTypes } from '../actions';
import { State } from '../state';
import { Track } from '../types';

export default (state: State, action: Action): State => {
    switch (action.type) {

    case ActionTypes.ADD_TRACK:
        const newTrack: Track = { beats: [], filename: '', id: uuid() }
        for (let i = 0; i < 16; i++) {
            newTrack.beats.push({ isEnabled: false });
        }
        return produce(state, draft => {
            draft.tracks.push(newTrack)
        });

    case ActionTypes.DELETE_TRACK:
        return produce(state, draft => {
            draft.tracks = draft.tracks.filter(track => track.id !== action?.payload?.trackId);
        });

    case ActionTypes.PLAY:
        return produce(state, draft => {
            draft.isPlaying = true;
        });

    case ActionTypes.SET_BPM:
        const {
            payload: {
                bpm
            } = {}
        } = action;

        if (Number.isNaN(bpm)) {
            return state;
        } else if (bpm > 200) {
            return produce(state, draft => {
                draft.bpm = 200;
            });
        } else if (bpm < 1) {
            return produce(state, draft => {
                draft.bpm = 1;
            });
        } else {
            return produce(state, draft => {
                draft.bpm = bpm;
            });
        }

    case ActionTypes.STOP:
        return produce(state, draft => {
            draft.isPlaying = false;
        });

    case ActionTypes.TOGGLE_BEAT:
        const newState = produce(state, draft => {
            const track = draft.tracks.find(track => track?.id === action?.payload?.trackId);

            if (track) {
                const beat = track?.beats[action?.payload?.index];

                if (beat) {
                    beat.isEnabled = !beat?.isEnabled;
                }
            }
        });

        return newState;

    default:
        return state;

    }
};