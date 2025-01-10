import { favouriteColorsAtom } from '@/src/state/favouriteColorAtom'
import { palette } from '@/src/theme/palette'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

export default function TabTwoScreen() {
  const [favoriteColors, setFavoriteColors] = useAtom(favouriteColorsAtom)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await favoriteColors
      setIsLoading(false)
    }
    fetchData()
  }, [favoriteColors])

  const handleLongPress = (color: string) => {
    Alert.alert('Delete Color', `Are you sure you want to delete ${color}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const updatedColors = favoriteColors.filter((c) => c !== color)
          setFavoriteColors(updatedColors)

          AsyncStorage.setItem('favouriteColors', JSON.stringify(updatedColors))

          Toast.show({
            type: 'success',
            position: 'top',
            text1: `${color} removed from favorites!`,
            visibilityTime: 1000,
            autoHide: true
          })
        }
      }
    ])
  }

  const renderItem = ({ item }: { item: string }) => {
    const isWhite = item === palette?.colors?.white

    return (
      <TouchableWithoutFeedback onLongPress={() => handleLongPress(item)}>
        <View style={styles.card}>
          <View style={[styles.colorSquare, { backgroundColor: item }, isWhite && styles.whiteBorder]} />
          <Text style={styles.colorText}>{item}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={palette?.colors?.gray?.dark} />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favourite Colors</Text>
      <FlatList
        data={favoriteColors}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Long press a color to delete it from your favorites list.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: palette?.colors?.black
  },
  flatListContainer: {
    padding: 10
  },
  columnWrapper: {
    justifyContent: 'space-between'
  },
  card: {
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    backgroundColor: palette?.colors?.white
  },
  whiteBorder: {
    borderWidth: 1,
    borderColor: palette?.colors?.black
  },
  colorSquare: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  colorText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: palette?.colors?.gray?.dark
  },
  infoContainer: {
    alignItems: 'center',
    paddingVertical: 10
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    color: palette?.colors?.gray?.dark
  }
})
