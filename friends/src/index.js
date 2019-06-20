import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";
import { friendReducer } from "./reducers/friendReducer"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addTokenToLocalStorage } from "./middleware/authMiddleWare"


const combinedReducer = combineReducers({
    friendReducer,
  });

const store = createStore(combinedReducer,
    compose(
        applyMiddleware(thunk, addTokenToLocalStorage, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      ),
    )

ReactDOM.render(
                <Provider store = {store}>
                    <App />
                    </Provider>, 
                    document.getElementById('root')
                );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
