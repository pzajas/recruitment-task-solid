import { PrimaryButton } from '@/src/components/buttons/PrimaryButton'
import { constants } from '@/src/constants/constants'
import { palette } from '@/src/theme/palette'
import { getRandomColor } from '@/src/utils/getRandomColor'
import { useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, Vibration } from 'react-native'

export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState(palette.colors.white)

  const handleTap = () => {
    const randomColor = getRandomColor()
    setBackgroundColor(randomColor)
    Vibration.vibrate(100)
  }

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
