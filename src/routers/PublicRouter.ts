import ButtonTabsNavigations from '../../navigations/ButtonTabsNavigations'
import Home from '../screens/Home'
import Login from '../screens/Login'
import { TypeRouter } from './../types/Types'
export default <TypeRouter[]>[
  // {
  //   component: Login,
  //   name: 'LoginScreen',
  //   options: {
  //     headerShown: false,
  //   },
  // },
  {
    component: ButtonTabsNavigations,
    name: 'bottom-tabs',
    options: {
      headerShown: false,
    },
  },
]
