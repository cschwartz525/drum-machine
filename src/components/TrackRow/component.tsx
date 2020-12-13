import React, { memo } from 'react';
import styled from 'styled-components';
import BeatSquare from '../BeatSquare';
import { Track } from '../../redux/types';

const Wrapper = styled.div`
    display: flex;
`;

const TrackRow = ({
    deleteTrack,
    track
}: {
    deleteTrack: (trackId: string) => void,
    track: Track
}): JSX.Element => (
    <Wrapper>
        <button
            onClick={(): void => deleteTrack(track?.id)}
        >
            Delete Track
        </button>
        <div style={{ display: 'flex' }}>
            {track.beats.map((beat, i) => (
                <BeatSquare
                    index={i}
                    key={`beat-${i}`}
                    trackId={track?.id}
                />
            ))}
        </div>
    </Wrapper>
);

export default memo(TrackRow);