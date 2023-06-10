import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

const StylesModules = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    width: width,
    height: height,
  },

  font: {
    fontFamily: 'Poppins-Black',
  },
})
export default StylesModules
