import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>This is a demonstration app</Text>
      <Text>
        Version <Text style={styles.version}>1.0.0</Text>
      </Text>

      <Text>Сreated by siyazoff</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "open-regular",
  },
  version: {
    fontFamily: "open-bold",
  },
});
