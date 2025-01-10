import Toast from 'react-native-toast-message'

export const getToastMessage = (type: 'success' | 'error', message: string) => {
  Toast.show({
    type,
    position: 'top',
    text1: message,
    visibilityTime: 1000,
    autoHide: true
  })
}
