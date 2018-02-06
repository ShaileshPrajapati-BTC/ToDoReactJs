import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer/index';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
const persistConfig = {
    key: 'root',
    storage: storage,
}
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
    let store = createStore(persistedReducer,applyMiddleware(...middlewares))
    let persistor = persistStore(store)
    return { store, persistor }
}

// const Store = createStore(
//     reducers,
//     applyMiddleware(thunk)
// );