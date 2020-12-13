import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action, toggleBeat } from '../../redux/actions';
import { State } from '../../redux/state';
import BeatSquare from './component';

const mapStateToProps = (state: State, props: { index: number, trackId: string }) => {
    const { index, trackId } = props;
    const track = state.tracks.find(t => t.id === trackId);
    const beat = track.beats[index];

    return { beat };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    toggleBeat: (index: number, trackId: string): void => {
        dispatch(toggleBeat(index, trackId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatSquare);