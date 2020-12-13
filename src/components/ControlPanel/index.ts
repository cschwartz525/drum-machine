import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action, setBpm } from '../../redux/actions';
import { State } from '../../redux/state';
import ControlPanel from './component';

const mapStateToProps = (state: State) => ({
    bpm: state.bpm
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    setBpm: (bpm: number): void => {
        dispatch(setBpm(bpm));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);