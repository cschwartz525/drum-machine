import { Track } from '../types';

export type State = {
    bpm: number;
    isPlaying: boolean;
    tracks: Track[];
};

export default {
    bpm: 120,
    isPlaying: false,
    tracks: []
};