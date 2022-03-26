import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { THEME } from "../theme";
import TabRoutes from "./TabRoutes";
import AboutStack from "./AboutStack";
import CreateStack from "./CreateStack";

const Drawer = createDrawerNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
          drawerActiveTintColor: THEME.ORANGE_COLOR,
          drawerInactiveTintColor: THEME.MAIN_COLOR,
          drawerLabelStyle: {
            fontFamily: "open-bold",
          },
        }}
      >
        <Drawer.Screen name="TabRoutes" component={TabRoutes} />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{
            drawerLabel: "About the app",
          }}
        />
        <Drawer.Screen
          name="CreateStack"
          component={CreateStack}
          options={{ drawerLabel: "Create a new post" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
