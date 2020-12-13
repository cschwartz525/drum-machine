import React, { memo } from 'react';
import styled from 'styled-components';
import { Track } from '../../redux/types';

const Wrapper = styled.div``;

const TrackRow = ({
    deleteTrack,
    track
}: {
    deleteTrack: (trackId: string) => void,
    track: Track
}): JSX.Element => (
    <Wrapper>
        <button
            onClick={(): void => deleteTrack(track.id)}
        >
            Delete Track
        </button>
    </Wrapper>
);

export default memo(TrackRow);