import { PrimaryButton } from '@/src/components/buttons/PrimaryButton'
import { constants } from '@/src/constants/constants'
import useFavoriteColors from '@/src/hooks/useFavouriteColors'
import { palette } from '@/src/theme/palette'
import { getRandomColor } from '@/src/utils/getRandomColor'
import { useEffect, useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Vibration } from 'react-native'
import Toast from 'react-native-toast-message'
import Icon from 'react-native-vector-icons/AntDesign'

export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState(palette.colors.white)
  const [tapCount, setTapCount] = useState(0)

  const { handleAddToFavorites } = useFavoriteColors()

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
        <Pressable style={styles.favoriteButton} onPress={() => handleAddToFavorites(backgroundColor)}>
          <Icon name="plus" size={20} color={palette.colors.black} />
        </Pressable>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoriteButton: {
    zIndex: 1,
    bottom: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: palette.colors.black,
    backgroundColor: palette.colors.white
  }
})
