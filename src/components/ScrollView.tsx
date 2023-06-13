import { StyleSheet, Text, View, RefreshControl, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { selectCartFromLocal } from '../features/CartSlice'

const ScrollViewCustom = ({ children }: any) => {
  const [refresh, setRefresh] = React.useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()
  const pullMe = () => {
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false)
      dispatch(selectCartFromLocal())
    }, 3000)
  }
  return (
    <ScrollView
      style={{
        marginTop: 20,
        // marginBottom: 80,
        height: Dimensions.get('screen').height * 0.8,
      }}
      refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />}
    >
      <View>{children}</View>
    </ScrollView>
  )
}

export default ScrollViewCustom

const styles = StyleSheet.create({})
