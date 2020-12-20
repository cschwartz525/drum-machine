import { Track } from '../../redux/types';

export namespace TrackRowProps {

    export type PassedProps = {
        id: string;
    };

    export type StateProps = {
        track: Track;
    };

    export type DispatchProps = {
        deleteTrack: (trackId: string) => void;
        setSample: (trackId: string, sampleId: string) => void;
    };

    export type Root = PassedProps & StateProps & DispatchProps;

}