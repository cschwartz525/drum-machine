import { connect } from 'react-redux';
import { State } from '../../redux/state';
import Tracks from './component';

const mapStateToProps = (state: State) => ({
    tracks: state.tracks
});

export default connect(mapStateToProps, null)(Tracks);