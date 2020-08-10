import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; 
import authReducer from './auth-reducer'
import goodsReducer from './goods-reducer'
import thunk from 'redux-thunk';

let reducers = combineReducers({
    goods: goodsReducer,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default store;