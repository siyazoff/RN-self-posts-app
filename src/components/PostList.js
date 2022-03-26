import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>There are no posts yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        numColumns={"2"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingBottom: 41,
  },
  noItems: {
    fontFamily: "open-regular",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
  },
});
