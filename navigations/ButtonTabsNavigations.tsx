import { Animated, StyleSheet, Dimensions, View, Text } from 'react-native'
import React, { useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/Ionicons'
import { RouteButtonTabs } from '../src/routers/BottomTabs'
import Colors from '../src/modules/Colors'
import { Badge } from '@react-native-material/core'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Tabs = createBottomTabNavigator()

const ButtonTabsNavigations = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current
  const { cartItems } = useSelector((state: RootState) => state.cart)

  function getWidth() {
    let width = Dimensions.get('window').width

    width = width - 20
    return width / 4
  }
  return (
    <Tabs.Navigator>
      {RouteButtonTabs?.map((tab: any, index: number) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: Colors.pink, height: 60 },
            tabBarIcon: ({ focused }: any) => {
              return (
                <>
                  <Icon name={tab.icon} size={25} color={focused ? Colors.blue : Colors.white} />
                  {/* {tab.badge && cartItems && (
                    <Badge
                      style={{
                        position: 'absolute',
                        top: 6,
                        left: 50,
                      }}
                      color='primary'
                      label={JSON.parse(cartItems)?.length}
                    />
                  )} */}
                </>
              )
            },
          }}
          listeners={({ navigation, route }: any) => ({
            tabPress: (e: any) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start()
            },
          })}
        />
      ))}
    </Tabs.Navigator>
  )
}

export default ButtonTabsNavigations
