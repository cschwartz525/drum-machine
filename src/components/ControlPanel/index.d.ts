export namespace ControlPanelProps {

    export type StateProps = {
        bpm: number;
        isPlaying: boolean;
    };

    export type DispatchProps = {
        addTrack: () => void;
        play: () => void;
        setBpm: (bpm: number) => void;
        stop: () => void;
    };

    export type Root = StateProps & DispatchProps;

}