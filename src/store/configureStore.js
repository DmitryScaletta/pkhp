import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  return (process.env.NODE_ENV === 'production')
    ? createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk),
      )
    : createStore(
        rootReducer,
        preloadedState,
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), /* eslint no-underscore-dangle: "off" */
        ),
      );
}
