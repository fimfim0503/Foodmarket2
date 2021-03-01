
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView,Text,StatusBar,} from 'react-native';
import { SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';




const App = () => {
  return (
    
    <NavigationContainer>
      <SplashScreen/>
    </NavigationContainer>
  );
};



export default App;
