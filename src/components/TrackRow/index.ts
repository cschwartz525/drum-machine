import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action, deleteTrack, setSample } from '../../redux/actions';
import { State } from '../../redux/state';
import TrackRow from './component';
import { TrackRowProps } from './index.d';

const mapStateToProps = (state: State, props: TrackRowProps.PassedProps): TrackRowProps.StateProps => {
    const { id } = props;
    const { tracks } = state;
    const track = tracks.find(t => t.id === id);

    return { track };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): TrackRowProps.DispatchProps => ({
    deleteTrack: (trackId: string): void => {
        dispatch(deleteTrack(trackId));
    },
    setSample: (trackId: string, sampleId: string): void => {
        dispatch(setSample(trackId, sampleId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackRow);