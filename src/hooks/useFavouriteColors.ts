import { useAtom } from 'jotai'
import { favouriteColorsAtom } from '../state/favouriteColorAtom'
import { getToastMessage } from '../utils/getToastMessage'

const useFavoriteColors = () => {
  const [favoriteColors, setFavoriteColors] = useAtom(favouriteColorsAtom)
  const safeFavoriteColors = Array.isArray(favoriteColors) ? favoriteColors : []

  const handleAddToFavorites = (color: string) => {
    if (safeFavoriteColors.includes(color)) {
      getToastMessage('error', 'Color is already in favorites!')
      return
    }

    const updatedFavorites = [...safeFavoriteColors, color]
    setFavoriteColors(updatedFavorites)

    getToastMessage('success', 'Color added to favorites!')
  }

  const handleRemoveFromFavorites = (color: string) => {
    const updatedFavorites = safeFavoriteColors.filter((item) => item !== color)
    setFavoriteColors(updatedFavorites)

    getToastMessage('success', 'Color removed from favorites!')
  }

  return {
    favoriteColors: safeFavoriteColors,
    handleAddToFavorites,
    handleRemoveFromFavorites
  }
}

export default useFavoriteColors
