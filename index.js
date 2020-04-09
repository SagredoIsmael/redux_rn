import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './configureStore'

export default (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
      </PersistGate>
    </Provider>
)