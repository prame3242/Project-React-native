import React from 'react';
import { styles } from './components/styles';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: {
          backgroundColor: '#FFBCBC',
        },
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'About Page'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register Page'}}
      />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: {
          backgroundColor: '#FFBCBC',
        },
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{title: 'Product Page'}}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{title: 'Details Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContentOptions={{
          activeTintColor: '#e91263',
          itemStyle: {marginVertical: 5},
        }}
        drawerContent={props => <MenuScreen {...props} />}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          // options={{drawerLabel: 'Home Stack'}}
        />
        <Drawer.Screen
          name="ProductStack"
          component={ProductStack}
          // options={{drawerLabel: 'Product Stack'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;