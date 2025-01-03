// src/screens/HomeScreen/HomeScreen.tsx

import { PrimaryButton } from '@/src/components/buttons/PrimaryButton'
import { constants } from '@/src/constants/constants'
import { palette } from '@/src/theme/palette'
import { getRandomColor } from '@/src/utils/getRandomColor'
import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, Vibration } from 'react-native'
import Toast from 'react-native-toast-message'

export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState(palette.colors.white)
  const [tapCount, setTapCount] = useState(0)

  const handleTap = () => {
    const randomColor = getRandomColor()
    setBackgroundColor(randomColor)
    Vibration.vibrate(100)
    setTapCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    if (tapCount % 10 === 0 && tapCount !== 0) {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: `You've tapped ${tapCount} times!`,
        visibilityTime: 3000,
        autoHide: true
      })
    }
  }, [tapCount])

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <PrimaryButton label={constants.strings.greeting} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
