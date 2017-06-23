import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { translateReducer,
         currentFlashcardReducer } from './reducers';
import './index.scss';

let store = createStore(combineReducers({
  translate: translateReducer,
  currentFlashcard: currentFlashcardReducer,
}));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
