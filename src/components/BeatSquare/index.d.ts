import { Beat } from '../../redux/types';

export namespace BeatSquareProps {

    export type PassedProps = {
        index: number;
        trackId: string;
    };

    export type StateProps = {
        beat: Beat;
        playing: boolean;
    };

    export type DispatchProps = {
        toggleBeat: (index: number, trackId: string) => void;
    };

    export type Root = PassedProps & StateProps & DispatchProps;

}