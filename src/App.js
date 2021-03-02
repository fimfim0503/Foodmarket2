
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView,Text,StatusBar,} from 'react-native';
import { SplashScreen, SignIn } from './pages';
import { NavigationContainer } from '@react-navigation/native';




const App = () => {
  return (
    
    <NavigationContainer>
      {/* <SplashScreen/> */}
      <SignIn/>
    </NavigationContainer>
  );
};



export default App;
