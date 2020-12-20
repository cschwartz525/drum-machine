import React, { memo } from 'react';
import Select from 'react-select'
import styled from 'styled-components';
import BeatSquare from '../BeatSquare';
import { TrackRowProps } from './index.d';
import { getSampleOptions, getSelectStyles } from './utils';

const Wrapper = styled.div`
    align-items: center;
    border-bottom: 1px solid #000000;
    border-top: 1px solid #000000;
    display: flex;
`;

const DeleteTrackButton = styled.button`
    cursor: pointer;
    min-height: 35px;
    margin: 5px 0;
    width: 90px;
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
        <Select
            options={getSampleOptions()}
            placeholder='Choose a sample...'
            styles={getSelectStyles()}
        />
        <DeleteTrackButton
            onClick={(): void => deleteTrack(track?.id)}
        >
            Delete
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