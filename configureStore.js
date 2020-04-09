import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'currentLogin'
  ],
  blacklist: [
  ],
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)

const store = createStore(
  persistedReducer,
  applyMiddleware(ReduxThunk, logger)
)

const persistor = persistStore(store)

export {
  store,
  persistor,
}
