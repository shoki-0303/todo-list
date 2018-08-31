import React from 'react';
import ReactDOM from 'react-dom';
import EventsIndex from './components/EventsIndex';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EventsIndex />, document.getElementById('root'));
registerServiceWorker();
