/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuDrawer from "./screens/MenuDrawer";
const Drawer = createDrawerNavigator();
function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <MenuDrawer {...props} />} screenOptions={{
        drawerStyle: {
          width: "100%",
        },
        headerShown: false,
      }}>
        <Drawer.Screen
          name="Home"
          component={Home}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
