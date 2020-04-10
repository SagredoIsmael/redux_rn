import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, storeWithPersist, persistor } from './configureStore'

export const ReduxWrapper = ({ App, isPersistActive }) => (
  isPersistActive ?
    <Provider store={storeWithPersist}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        {App}
      </PersistGate>
    </Provider>
    :
    <Provider store={store}>
      {App}
    </Provider>
)