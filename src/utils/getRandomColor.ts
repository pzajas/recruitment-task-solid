import { constants } from '../constants/constants'

export const getRandomColor = () => {
  const letters = constants.strings.letters
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
