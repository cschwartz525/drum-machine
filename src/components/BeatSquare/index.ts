import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action, toggleBeat } from '../../redux/actions';
import { State } from '../../redux/state';
import BeatSquare from './component';
import { BeatSquareProps } from './index.d';

const mapStateToProps = (state: State, props: BeatSquareProps.PassedProps): BeatSquareProps.StateProps => {
    const { index, trackId } = props;
    const { playingIndex } = state;
    const track = state.tracks.find(t => t.id === trackId);
    const beat = track.beats[index];
    const playing = playingIndex === index;

    return { beat, playing };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): BeatSquareProps.DispatchProps => ({
    toggleBeat: (index: number, trackId: string): void => {
        dispatch(toggleBeat(index, trackId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatSquare);