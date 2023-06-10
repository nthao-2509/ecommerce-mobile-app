import { NavigationContainer } from '@react-navigation/native'
import AuthTrack from './navigations/AuthTrack'
import { Provider } from 'react-redux'
import { store } from './store'
import React from 'react'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { default as mapping } from './custom_ui_kitten.json'

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider customMapping={mapping} {...eva} theme={eva.light}>
        <Provider store={store}>
          <AuthTrack />
        </Provider>
      </ApplicationProvider>
    </NavigationContainer>
  )
}
