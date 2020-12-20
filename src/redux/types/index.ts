export type Beat = {
    isEnabled: boolean;
};

export type Track = {
    beats: Beat[];
    filename: string;
    id: string;
    sample: string;
};