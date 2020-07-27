import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import middleware from './middleware';

import TestFirebase from './testFireBase';

const store = createStore(reducer, middleware);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <TestFirebase />
      </div>
    </Provider>
  );
}

export default App;
