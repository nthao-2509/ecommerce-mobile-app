export type TypeOptionRoute = {
  headerShown: boolean
  title?: string
  headerStyle?: any
  headerTintColor?: string
  headerTitleStyle?: any
  headerRight?: boolean
}
export type TypeRouter = {
  name: string
  component: () => JSX.Element
  options: TypeOptionRoute
}
export type TypeLocation = {
  coords: {
    accuracy: number | null | undefined
    altitude: number | null | undefined
    altitudeAccuracy: number | null | undefined
    heading: number | null | undefined
    latitude: number | null | undefined
    longitude: number | null | undefined
    speed: number | null | undefined
  }
  mocked?: boolean | undefined
  timestamp: number
}
