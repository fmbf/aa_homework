import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';





document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  // logger
  store.dispatch = myLogger(store);

  // apply
  store = myApplyMidWr(store, addLogging);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});




// logger

const myLogger = (store) => {

  // const myDispatch
  const disp = store.dispatch;

  return (action) => {

    console.log(store.getState());
    console.log(action);

    disp(action);
    // console.log();
    console.log(store.getState());
  };
};

const myApplyMidWr = (store, ...middlewares) => {

  let dispatch = store.dispatch;

  middlewares.forEach( middleware => {
    dispatch = middleware(store)(dispatch);
  });

  //prefer not to use Object.assign?
  return Object.assign({}, store, { dispatch });
};


const addLogging = store => next => action => {
  console.log(store.getState());
  // console.log(store.getState());
  console.log(action);

  next(action);
  // console.log(action);


  console.log(store.getState());
};
