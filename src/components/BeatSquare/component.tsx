import React, { memo } from 'react';
import styled from 'styled-components';
import { Beat } from '../../redux/types';

interface SquareProps {
    isEnabled: boolean;
}

const Square = styled.button<SquareProps>`
    background-color: ${({ isEnabled }) => (isEnabled ? '#bb0000' : '#888888')};
    height: 40px;
    margin: 5px;
    width: 40px;
`;

const BeatSquare = ({
    beat,
    index,
    toggleBeat,
    trackId
}: {
    beat: Beat,
    index: number,
    toggleBeat: (index: number, trackId: string) => void,
    trackId: string
}): JSX.Element => (
    <Square
        isEnabled={beat?.isEnabled}
        onClick={(): void => toggleBeat(index, trackId)}
    />
);

export default memo(BeatSquare);