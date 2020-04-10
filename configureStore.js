import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'
import expireReducer from 'redux-persist-expire'
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = (reducers, settingsPersist) => {
  const transforms = settingsPersist.expired.map(expireItem =>
    expireReducer(expireItem.name, {
      ...expireItem
    }))

  return persistReducer(
    {
      ...persistConfig,
      settingsPersist,
      transforms: transforms
    },
    reducers ? combineReducers(
      reducers
    ) : rootReducer
  )
}

const store = reducers => {
  return createStore(
    reducers ? combineReducers(
      reducers
    ) : rootReducer,
    applyMiddleware(ReduxThunk, logger)
  )
}

const storeWithPersist = (reducers, settingsPersist) =>
  createStore(
    persistedReducer(reducers, settingsPersist),
    applyMiddleware(ReduxThunk, logger)
  )

const persistor = (reducers, settingsPersist) => persistStore(storeWithPersist(reducers, settingsPersist))

export {
  store,
  storeWithPersist,
  persistor,
}
