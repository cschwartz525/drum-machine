import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action, addTrack, play, setBpm, stop } from '../../redux/actions';
import { State } from '../../redux/state';
import ControlPanel from './component';
import { ControlPanelProps } from './index.d';

const mapStateToProps = (state: State): ControlPanelProps.StateProps => ({
    bpm: state.bpm,
    isPlaying: state.isPlaying
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): ControlPanelProps.DispatchProps => ({
    addTrack: (): void => {
        dispatch(addTrack());
    },
    play: (): void => {
        dispatch(play());
    },
    setBpm: (bpm: number): void => {
        dispatch(setBpm(bpm));
    },
    stop: (): void => {
        dispatch(stop());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);