import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../modules/Colors'
import Icon from '@expo/vector-icons/Ionicons'
import { Input } from '@ui-kitten/components'
const { width } = Dimensions.get('screen')
const Header = () => {
  const [value, setValue] = React.useState('')
  return (
    <View style={styles.flex}>
      <TouchableOpacity>
        <Icon name='scan-outline' size={30} />
      </TouchableOpacity>
      <Input
        style={{
          flex: 1,
        }}
        placeholder='Place your Text'
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        accessoryRight={
          <TouchableOpacity>
            <Icon name='search-outline' size={23} />
          </TouchableOpacity>
        }
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})
