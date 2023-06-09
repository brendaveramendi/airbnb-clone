import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './src/screens/home/HomeScreen'
import { ProfileScreen } from './src/screens/profile/ProfileScreen'
const Tab = createBottomTabNavigator()
export default function App () {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
        <StatusBar style='auto' />
      </NavigationContainer>

    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
