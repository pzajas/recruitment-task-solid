import { palette } from '@/src/theme/palette'
import { PressableButtonProps } from '@/src/typescript/types'
import { StyleSheet, Text, View } from 'react-native'

export const PrimaryButton = ({ label }: PressableButtonProps) => (
  <View style={styles.innerContainer}>
    <Text style={styles.text}>{label}</Text>
  </View>
)

const styles = StyleSheet.create({
  innerContainer: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: palette.colors.transparent
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: palette.colors.black
  }
})
