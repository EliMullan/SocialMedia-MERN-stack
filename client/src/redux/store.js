import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducer';

const store = configureStore({
    reducer: rootReducer
})

const {dispach} = store;

export {store, dispach}