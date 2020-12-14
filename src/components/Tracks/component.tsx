import React, { memo } from 'react';
import styled from 'styled-components';
import TrackRow from '../../components/TrackRow';
import { TracksProps } from './index.d';

const Wrapper = styled.div`
    margin: 10px auto;
`;

const Tracks = ({ tracks }: TracksProps.Root): JSX.Element => (
    <Wrapper>
        {tracks.map(({ id }) => <TrackRow id={id} key={id} />)}
    </Wrapper>
);

export default memo(Tracks);