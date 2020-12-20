import React, { memo } from 'react';
import styled from 'styled-components';
import { BeatSquareProps } from './index.d';

interface SquareProps {
    isEnabled: boolean;
    isPlaying: boolean;
}

const Square = styled.button<SquareProps>`
    background: ${({ isEnabled, isPlaying }) => (
        isEnabled
            ? isPlaying ? '#ff4444' : '#bb0000'
            : isPlaying ? '#cccccc' : '#888888'
    )};
    border: none;
    cursor: pointer;
    height: 4vw;
    margin: 5px;
    min-height: 30px;
    min-width: 30px;
    width: 4vw;

    &:hover {
        background: ${({ isEnabled }) => (isEnabled ? 'linear-gradient(#bb0000, #880000);' : 'linear-gradient(#888888, #555555);')};
    }
`;

const BeatSquare = ({
    beat,
    index,
    playing,
    toggleBeat,
    trackId
}: BeatSquareProps.Root): JSX.Element => (
    <Square
        isEnabled={beat?.isEnabled}
        isPlaying={playing}
        onClick={(): void => toggleBeat(index, trackId)}
    />
);

export default memo(BeatSquare);