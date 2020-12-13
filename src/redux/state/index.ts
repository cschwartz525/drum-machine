export type Beat = {
    isEnabled: boolean;
};

export type Track = {
    beats: Beat[];
    filename: string;
    id: string;
};

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