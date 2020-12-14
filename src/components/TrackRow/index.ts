import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action, deleteTrack } from '../../redux/actions';
import { State } from '../../redux/state';
import TrackRow from './component';
import { TrackRowProps } from './index.d';

const mapStateToProps = (state: State, props: TrackRowProps.PassedProps): TrackRowProps.StateProps => {
    const { id } = props;
    const track = state.tracks.find(t => t.id === id);

    return { track };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): TrackRowProps.DispatchProps => ({
    deleteTrack: (trackId: string): void => {
        dispatch(deleteTrack(trackId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackRow);