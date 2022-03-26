import React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { CreateScreen } from "../screens/CreateScreen";
import { THEME } from "../theme";

const Stack = createNativeStackNavigator();

export default function CreateStack() {
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
        name="Create"
        component={CreateScreen}
        options={({ navigation }) => ({
          title: "Create your post",
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
    </Stack.Navigator>
  );
}
