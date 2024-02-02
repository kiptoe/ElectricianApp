// App.js
import  React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login}  
      />

      <Stack.Screen
        name ='creatProfile' 
        component={Profile}>
      </Stack.Screen>

      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
      />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};