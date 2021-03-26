import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Text,
  GestureResponderEvent,
} from "react-native";

interface Props {
  pic: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}
const Releases = ({ pic, onPress, title }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.txt}>{title}</Text>

      {/* <Image style={styles.image} source={pic} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCF0FF",
    width: 100,
    height: 100,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  txt: {
    color: "#D392FC",
    fontWeight: "bold",
  },
});

export default Releases;
