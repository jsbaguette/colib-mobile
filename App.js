import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from "react-native"

import HomeScreen from './src/screens/HomeScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import NotFoundScreen from './src/screens/NotFoundScreen.js';

const Stack = createNativeStackNavigator();

console.log("i am here")

const linking = {
  prefixes: [
    'colib://', 
    'https://colib.io'
  ],
  config: {
    screens: {
      Login: {
        path: "/login"
      },
      Home: {
        path: "/"
      },
      NotFound: {
        path: "*"
      },
    }
  }
}

function App() {


  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ 
          title: "Login Page",
          gestureEnabled: false
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ 
          title: "Home",
          gestureEnabled: false
        }}  />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;