import React, { useState } from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [4, 3],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!img.cancelled) {
      setImage(img.uri);
      onPick(img.uri);
    }
  };

  return (
    <View style={styles.wrap}>
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <Button title="Take photo" onPress={takePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  wrap: {
    marginBottom: 10,
  },
});
