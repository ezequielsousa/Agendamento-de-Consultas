import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/pages/Splash/index';
import Login from './src/pages/Login/index';
import Cadastro from './src/pages/Cadastro/index';
import Home from './src/pages/Home/index';
import Agendamento from './src/pages/Agendamento/index';



const Stack = createNativeStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Agendamento" component={Agendamento}/>
    </Stack.Navigator>
    </NavigationContainer>
);
}