import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './configureStore'

export const ReduxWrapper = ({App}) => (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
          {App}
      </PersistGate>
    </Provider>
)