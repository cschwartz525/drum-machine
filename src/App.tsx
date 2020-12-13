import React from 'react';
import { Provider } from 'react-redux';
import ControlPanel from './components/ControlPanel';
import store from './redux/store';

const App = (): JSX.Element => (
    <Provider store={store}>
        <h1>Drum Machine</h1>
        <ControlPanel />
    </Provider>
);

export default App;