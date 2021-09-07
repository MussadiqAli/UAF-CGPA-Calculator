import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GPA from './src/Components/GPA';
import CGPA from './src/Components/CGPA';
import AnimatedSplash from "react-native-animated-splash-screen";

const Stack = createStackNavigator();


const AppNavigator = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GPA" screenOptions={{headerShown: false}}>
        <Stack.Screen name="GPA" component={GPA} />
        <Stack.Screen name="CGPA" component={CGPA} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 4000)
  }, []);
 
  return (
    <AnimatedSplash
        translucent={false}
        isLoaded={isLoaded}
        logoImage={require("./src/images/splash.png")}
        backgroundColor={"white"}
        logoHeight={200}
        logoWidth={200}
      >
        <AppNavigator />
      </AnimatedSplash>
  );
};



export default App;
