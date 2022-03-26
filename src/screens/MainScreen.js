import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/postActions";
import { THEME } from "../theme";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.post.allPosts);
  const loading = useSelector((state) => state.post.loading);

  if (loading) {
    return (
      <View style={styles.load}>
        <ActivityIndicator color={THEME.ORANGE_COLOR} />
      </View>
    );
  }

  return <PostList data={allPosts} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({
  load: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
