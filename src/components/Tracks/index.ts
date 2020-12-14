import { connect } from 'react-redux';
import { State } from '../../redux/state';
import Tracks from './component';
import { TracksProps } from './index.d';

const mapStateToProps = (state: State): TracksProps.StateProps => ({
    tracks: state.tracks
});

export default connect(mapStateToProps, null)(Tracks);