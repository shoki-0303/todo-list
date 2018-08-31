import React from 'react';
import ReactDOM from 'react-dom';
import EventsIndex from './components/EventsIndex';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </ Provider>,
  document.getElementById('root'));
registerServiceWorker();
