import React from 'react';
import ReactDOM from 'react-dom';

import EventsIndex from './containers/EventsIndex';
import EventsShow from './containers/EventsShow';
import EventsNew from './containers/EventsNew';

import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

const middleWares = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleWares))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/events/:id" component={EventsShow} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
