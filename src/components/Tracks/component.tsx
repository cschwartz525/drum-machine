import React, { memo } from 'react';
import styled from 'styled-components';
import TrackRow from '../../components/TrackRow';
import { Track } from '../../redux/types';

const Wrapper = styled.div`
    margin: 10px auto;
`;

const Tracks = ({
    tracks
}: {
    tracks: Track[]
}): JSX.Element => {
    const trackRows = tracks.map(({ id }) => <TrackRow id={id} key={id} />);

    return (
        <Wrapper>
            {trackRows}
        </Wrapper>
    );
};

export default memo(Tracks);