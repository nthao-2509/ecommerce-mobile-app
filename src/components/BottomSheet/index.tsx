import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import Colors from '../../modules/Colors'

type Props = {
  children?: any
  snapPoints: string[]
}

const IndexBottomSheet = ({ children, snapPoints }: Props) => {
  const sheetRef = useRef<BottomSheet>(null)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <BottomSheet ref={sheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
      <BottomSheetView style={styles.bottomSheet}>
        <View style={styles.view_bottomSheet}>{children}</View>
      </BottomSheetView>
    </BottomSheet>
  )
}

export default IndexBottomSheet

const styles = StyleSheet.create({
  bottomSheet: {
    height: '100%',
    borderRadius: 20,
  },
  view_bottomSheet: {
    paddingHorizontal: 36,
    paddingVertical: 27,
  },
  text_title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    lineHeight: 27,
    color: Colors.dark,
  },
  view_contentBottomSheet: {},
})
