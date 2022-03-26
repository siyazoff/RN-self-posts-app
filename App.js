import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import * as Font from "expo-font";

import { DB } from "./src/db";
import AppNavigation from "./src/navigation/AppNavigation";
import store from "./src/store";

export default function App() {
  const [isLoaded, setLoaded] = useState(false);

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  useEffect(() => {
    const load = async () => {
      await Font.loadAsync({
        "open-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        "open-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
      });
      await DB.init();
      console.log("Database started...");
      setLoaded(true);
    };
    load();
  }, []);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
