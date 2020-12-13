import React, { memo } from 'react';

const ControlPanel = (): JSX.Element => (
    <div>
        <input
            max='200'
            min='1'
            name='bpm'
            type='number'
        ></input>
        <button>Play</button>
        <button>Add Track</button>
    </div>
);

export default memo(ControlPanel);