import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'
import expireReducer from 'redux-persist-expire'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = (settingsPersist) => {
  const transforms = settingsPersist.expired.map( expireItem =>
    expireReducer(expireItem.name, {
    ...expireItem
  }))

  return persistReducer(
    {
      ...persistConfig,
      settingsPersist,
      transforms: transforms
    },
    rootReducer
  )
}

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger)
)

const storeWithPersist = (settingsPersist) =>
  createStore(
    persistedReducer(settingsPersist),
    applyMiddleware(ReduxThunk, logger)
  )

const persistor = (settingsPersist) => persistStore(storeWithPersist(settingsPersist))

export {
  store,
  storeWithPersist,
  persistor,
}
