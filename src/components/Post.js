import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onOpen(post)}
      style={styles.post}
    >
      <View>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    overflow: "hidden",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    width: Dimensions.get("window").width / 2 - 15,
    height: Dimensions.get("window").height / 2 - 190,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  textWrap: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 3,
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontFamily: "open-regular",
  },
});
