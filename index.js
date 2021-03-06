import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, storeWithPersist, persistor } from './configureStore'

export const ReduxWrapper = ({ App, reducers, settingsPersist }) => (
  settingsPersist ?
    <Provider store={storeWithPersist(reducers, settingsPersist)}>
      <PersistGate
        loading={null}
        persistor={persistor(reducers, settingsPersist)}>
        <App/>
      </PersistGate>
    </Provider>
    :
    <Provider store={store(reducers)}>
      <App/>
    </Provider>
)