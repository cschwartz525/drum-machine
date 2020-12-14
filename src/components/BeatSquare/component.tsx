import React, { memo } from 'react';
import styled from 'styled-components';
import { BeatSquareProps } from './index.d';

interface SquareProps {
    isEnabled: boolean;
}

const Square = styled.button<SquareProps>`
    background: ${({ isEnabled }) => (isEnabled ? '#bb0000' : '#888888')};
    border: none;
    cursor: pointer;
    height: 40px;
    margin: 5px;
    width: 40px;

    &:hover {
        background: ${({ isEnabled }) => (isEnabled ? 'linear-gradient(#bb0000, #880000);' : 'linear-gradient(#888888, #555555);')};
    }
`;

const BeatSquare = ({
    beat,
    index,
    toggleBeat,
    trackId
}: BeatSquareProps.Root): JSX.Element => (
    <Square
        isEnabled={beat?.isEnabled}
        onClick={(): void => toggleBeat(index, trackId)}
    />
);

export default memo(BeatSquare);