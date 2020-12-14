import { Track } from '../../redux/types';

export namespace TracksProps {

    export type StateProps = {
        tracks: Track[];
    };

    export type Root = StateProps;

}