import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Texts from "./Texts";

interface Props {
  onPress: () => {};
}

const SearchCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/image/profile-pic-nirvana.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <Texts> Nirvana</Texts>
        <Texts> Rock</Texts>
        <Texts> Band</Texts>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCF0FF",
    width: "80%",
    height: 100,
    borderRadius: 10,
    elevation: 5,
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 80,
  },
  imgContainer: {
    justifyContent: "center",
    height: "100%",
    opacity: 0.5,
  },
  content: {
    marginStart: 20,
  },
});
export default SearchCard;
