import React, { memo } from 'react';
import styled from 'styled-components';
import playIcon from '../../images/play.svg';

const Wrapper = styled.div`
    background: linear-gradient(#ccc, #999);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const PlayStopButton = styled.button`
    background: url(${playIcon});
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30%;
    height: 40px;
    width: 80px;
`;

const ControlPanel = (): JSX.Element => (
    <Wrapper>
        <input
            max='200'
            min='1'
            name='bpm'
            type='number'
        ></input>
        <PlayStopButton />
        <button>Add Track</button>
    </Wrapper>
);

export default memo(ControlPanel);