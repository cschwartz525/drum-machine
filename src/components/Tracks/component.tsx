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
}): JSX.Element => (
    <Wrapper>
        {tracks.map(({ id }) => <TrackRow id={id} key={id} />)}
    </Wrapper>
);

export default memo(Tracks);