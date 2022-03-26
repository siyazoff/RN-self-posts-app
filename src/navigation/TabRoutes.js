import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainStack from "./MainStack";
import BookedStack from "./BookedStack";
import { THEME } from "../theme";

// const Tab =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator()
//     : createBottomTabNavigator();

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarButton: (props) => (
          <TouchableOpacity activeOpacity={0.5} {...props} />
        ),
        headerShown: false,
        tabBarActiveTintColor: THEME.ORANGE_COLOR,
        tabBarInactiveTintColor: "#fff",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: "open-bold",
        },
        tabBarStyle: {
          backgroundColor: THEME.MAIN_COLOR,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="Post holder"
        component={MainStack}
        options={({ route }) => ({
          tabBarLabel: "Post",
          // tabBarBadge: 13,
          tabBarIcon: () => {
            return <Ionicons name="ios-albums" size={25} />;
          },
        })}
      />
      <Tab.Screen
        name="Booked posts"
        component={BookedStack}
        options={{
          // tabBarBadge: 7,
          tabBarLabel: "Saved",
          tabBarIcon: () => {
            return <Ionicons name="ios-star" size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
