import React, { memo } from 'react';
import styled from 'styled-components';
import { AddTrackButton, PlayStopButton } from './components';

const Wrapper = styled.div`
    background: linear-gradient(#ccc, #999);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const BPMWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 40px;

    label {
        font-size: 24px;
        margin-right: 8px;
    }

    input {
        border: none;
        border-radius: 2px;
        font-size: 24px;
        height: 100%;
    }
`;

const ControlPanel = ({
    addTrack,
    bpm,
    isPlaying,
    play,
    setBpm,
    stop
}: {
    addTrack: () => void,
    bpm: number,
    isPlaying: boolean,
    play: () => void,
    setBpm: (bpm: number) => void,
    stop: () => void
}): JSX.Element => (
    <Wrapper>
        <BPMWrapper>
            <label>BPM</label>
            <input
                max='200'
                min='1'
                name='bpm'
                onChange={(e): void => {
                    const bpm: number = parseInt(e.target.value);
                    setBpm(bpm);
                }}
                type='number'
                value={bpm}
            ></input>
        </BPMWrapper>
        <PlayStopButton
            isPlaying={isPlaying}
            onClick={isPlaying ? stop : play}
            title='Play'
        />
        <AddTrackButton
            onClick={addTrack}
            title='Add Track'
        />
    </Wrapper>
);

export default memo(ControlPanel);