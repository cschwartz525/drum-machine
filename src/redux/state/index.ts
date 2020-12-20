import { Track } from '../types';

export type State = {
    bpm: number;
    isPlaying: boolean;
    playingIndex?: number;
    tracks: Track[];
};

export default {
    bpm: 120,
    isPlaying: false,
    tracks: []
};