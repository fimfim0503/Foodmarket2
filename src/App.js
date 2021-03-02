
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView,Text,StatusBar,} from 'react-native';
import { SplashScreen, SignIn } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';




const App = () => {
  return (
    
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
};



export default App;
