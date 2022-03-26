import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { BookedScreen } from "../screens/BookedScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";

const Stack = createNativeStackNavigator();

export default function BookedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
        headerTitleStyle: {
          fontFamily: "open-bold",
        },
      }}
    >
      <Stack.Screen
        name="Booked"
        component={BookedScreen}
        options={({ navigation }) => ({
          title: "Saved posts",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Toggle menu"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Post from ${route.params.date}`,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Take photo"
                iconName={route.params.booked ? "ios-star" : "ios-star-outline"}
                onPress={route.params.toggleHandler}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
