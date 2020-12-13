import React, { memo, ChangeEvent } from 'react';
import styled from 'styled-components';
import playIcon from '../../images/play.svg';
import plusIcon from '../../images/plus.svg';

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

const PlayStopButton = styled.button`
    background: url(${playIcon});
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30%;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    height: 40px;
    width: 80px;
`;

const AddTrackButton = styled.button`
    background: url(${plusIcon});
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    height: 40px;
    width: 40px;
`;

const ControlPanel = ({
    bpm,
    setBpm
}: {
    bpm: number,
    setBpm: (bpm: number) => void
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
            title='Play'
        />
        <AddTrackButton
            title='Add Track'
        />
    </Wrapper>
);

export default memo(ControlPanel);