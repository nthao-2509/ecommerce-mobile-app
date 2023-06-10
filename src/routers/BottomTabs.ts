import Home from '../screens/Home'
import Message from '../screens/Message'
import Order from '../screens/Order'
import Profile from '../screens/Profile'

export const RouteButtonTabs = [
  {
    name: 'home-screen',
    component: Home,
    icon: 'home-outline',
    badge: false,
  },
  {
    name: 'message-screen',
    component: Message,
    icon: 'chatbubble-ellipses-outline',
    badge: false,
  },
  {
    name: 'order-screen',
    component: Order,
    icon: 'cart-outline',
    badge: true,
  },
  {
    name: 'profile-screen',
    component: Profile,
    icon: 'person-outline',
    badge: false,
  },
]
