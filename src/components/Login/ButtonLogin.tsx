import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import Colors from '../../modules/Colors'

const { width, height } = Dimensions.get('screen')

type Props = {
  image?: any
  text: string
  backgroundColor: string
  color: string
  marginTop: string | number
  submit: () => void | Function
}
const ButtonLogin = ({ image, text, backgroundColor, color, marginTop, submit }: Props) => {
  return (
    <TouchableOpacity onPress={() => submit()} style={[styles.button, { backgroundColor, marginTop }]}>
      {!image ?? (
        <View style={styles.view_image}>
          <Image source={image} style={styles.image_button} />
        </View>
      )}
      <View style={styles.view_text}>
        <Text
          style={[
            styles.text_button,
            {
              color,
            },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ButtonLogin

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 50,
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 30,
    // height: height * 0.08,
  },
  view_image: {
    width: 48,
    height: 48,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image_button: {
    width: 20,
    height: 24.56,
    resizeMode: 'cover',
  },
  view_text: {
    flex: 1,
  },
  text_button: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 24,
  },
})
