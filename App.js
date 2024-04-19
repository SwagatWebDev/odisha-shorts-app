import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Context from './src/context/Context';
import OdishaShortsTabs from './src/components/OdishaShortsTabs';
import LoginScreen from './src/screens/LoginScreen';
import PhoneInputScreen from './src/screens/PhoneInputScreen';


const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
        <Context>
          <View style={styles.container}>
            <StatusBar backgroundColor="#282C35" barStyle="light-content" />
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="PhoneInput" component={PhoneInputScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="News" component={OdishaShortsTabs} options={{ headerShown: false }}/>
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </Context>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C35",
  }
});

export default App;
