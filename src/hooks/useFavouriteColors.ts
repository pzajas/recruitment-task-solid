import { useAtom } from 'jotai'
import Toast from 'react-native-toast-message'
import { favouriteColorsAtom } from '../state/favouriteColorAtom'

const useFavoriteColors = () => {
  const [favoriteColors, setFavoriteColors] = useAtom(favouriteColorsAtom)
  const safeFavoriteColors = Array.isArray(favoriteColors) ? favoriteColors : []

  const handleAddToFavorites = (color: string) => {
    if (safeFavoriteColors.includes(color)) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Color is already in favorites!',
        visibilityTime: 1000,
        autoHide: true
      })
      return
    }

    const updatedFavorites = [...safeFavoriteColors, color]
    setFavoriteColors(updatedFavorites)

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Color added to favorites!',
      visibilityTime: 1000,
      autoHide: true
    })
  }

  const handleRemoveFromFavorites = (color: string) => {
    const updatedFavorites = safeFavoriteColors.filter((item) => item !== color)
    setFavoriteColors(updatedFavorites)

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Color removed from favorites!',
      visibilityTime: 1000,
      autoHide: true
    })
  }

  return {
    favoriteColors: safeFavoriteColors,
    handleAddToFavorites,
    handleRemoveFromFavorites
  }
}

export default useFavoriteColors
