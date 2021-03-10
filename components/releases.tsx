import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

type props = {
  pic: ImageSourcePropType;
};
const Releases = ({ pic }: props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={pic} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCF0FF",
    width: 110,
    height: 110,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Releases;
