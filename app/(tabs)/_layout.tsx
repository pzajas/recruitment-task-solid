import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { palette } from '@/src/theme/palette'
import { Tabs } from 'expo-router'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.colors.blue.dark,
        tabBarInactiveTintColor: palette.colors.white,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: palette.colors.blue.light
          },
          default: {
            backgroundColor: palette.colors.blue.light
          }
        })
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Colors',
          tabBarIcon: ({ color }) => <Icon name="color-palette-outline" size={28} color={color} />
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color }) => <Icon name="star-outline" size={28} color={color} />
        }}
      />
    </Tabs>
  )
}
