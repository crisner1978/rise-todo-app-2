import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './store'
import { persistor } from './store'
import { Provider } from 'react-redux'

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default AppProviders