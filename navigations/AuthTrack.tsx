import { TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import PublicRouter from '../src/routers/PublicRouter'
import { TypeRouter } from '../src/types/Types'
import Icon from '@expo/vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../src/screens/Login'
import { checkLogin } from '../src/features/AuthSlice'
import { AppDispatch, RootState } from '../store'

const Stack = createNativeStackNavigator()

const AuthTrack = () => {
  const [userState, setUserState] = React.useState<
    | {
        message: string
        token: string
        role: string
        idUser: string
        user: {
          firstName: string
          lastName: string
          role: string
          email: string
          active: number
        }
      }
    | undefined
  >(undefined)
  const dispatch = useDispatch<AppDispatch>()
  const { user: dataUser, isLoading, isError, isSuccess, message: messageAuth } = useSelector((state: any) => state.auth)

  React.useEffect(() => {
    dispatch(checkLogin())
    setUserState(dataUser ? JSON.parse(dataUser) : undefined)
  }, [dispatch, dataUser])

  const navigation = useNavigation()
  return (
    <Stack.Navigator>
      {userState ? (
        <>
          {PublicRouter.map((item: TypeRouter, index: number) => {
            return (
              <Stack.Screen
                key={index}
                name={item.name}
                component={item.component}
                options={{
                  headerShown: item.options.headerShown,
                  title: item.options.title,
                  headerStyle: item.options.headerStyle,
                  headerTintColor: item.options.headerTintColor,
                  headerTitleStyle: item.options.headerTitleStyle,
                  headerRight: () => {
                    return (
                      <>
                        {item.options.headerRight && (
                          <TouchableOpacity
                            style={{ marginRight: 20 }}
                            onPress={() => {
                              navigation.dispatch(DrawerActions.toggleDrawer())
                            }}
                          >
                            <Icon name='menu-outline' size={30} />
                          </TouchableOpacity>
                        )}
                      </>
                    )
                  },
                }}
              />
            )
          })}
        </>
      ) : (
        // {
        //   component: Login,
        //   name: 'LoginScreen',
        //   options: {
        //     headerShown: false,
        //   },
        // },
        <Stack.Screen
          name='login'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  )
}

export default AuthTrack
