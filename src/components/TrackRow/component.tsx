import React, { memo } from 'react';
import styled from 'styled-components';
import BeatSquare from '../BeatSquare';
import { TrackRowProps } from './index.d';

const Wrapper = styled.div`
    border-bottom: 1px solid #000000;
    border-top: 1px solid #000000;
    display: flex;
`;

const DeleteTrackButton = styled.button`
    cursor: pointer;
    margin: 5px 0;
`;

const BeatsWrapper = styled.div`
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
    display: flex;
    margin-left: 10px;
    padding: 0 5px;
`;

const TrackRow = ({ deleteTrack, track }: TrackRowProps.Root): JSX.Element => (
    <Wrapper>
        <DeleteTrackButton
            onClick={(): void => deleteTrack(track?.id)}
        >
            Delete Track
        </DeleteTrackButton>
        <BeatsWrapper>
            {track.beats.map((beat, i) => (
                <BeatSquare
                    index={i}
                    key={`beat-${i}`}
                    trackId={track?.id}
                />
            ))}
        </BeatsWrapper>
    </Wrapper>
);

export default memo(TrackRow);