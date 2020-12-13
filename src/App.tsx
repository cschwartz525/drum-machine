import React from 'react';
import { Provider } from 'react-redux';
import ControlPanel from './components/ControlPanel';
import Tracks from './components/Tracks';
import store from './redux/store';

const App = (): JSX.Element => (
    <Provider store={store}>
        <h1>Drum Machine</h1>
        <ControlPanel />
        <Tracks />
    </Provider>
);

export default App;