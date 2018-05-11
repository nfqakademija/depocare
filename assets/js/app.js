import '../css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { createLogger} from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import { getUserInfo } from "./reducer/user/actions";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(persistedReducer, composeEnhancers(
    middleware,
));

let persistor = persistStore(store);


// Create app
const container = document.querySelector('#app-container');

if(localStorage.getItem("token") && store.getState().User.loading === false) {
    store.dispatch(getUserInfo());
}

// Render app
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , container
);

// Hot module reloading
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>
            , container
        );
    });
}
