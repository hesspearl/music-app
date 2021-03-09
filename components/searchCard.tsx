import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  children: String;
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

const Texts = ({ children }: Pick<Props, "children">) => {
  return <Text style={styles.txt}>{children}</Text>;
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
  txt: {
    color: "#D392FC",
    fontWeight: "bold",
  },
});
export default SearchCard;
