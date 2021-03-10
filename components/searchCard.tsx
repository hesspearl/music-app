import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import Texts from "./Texts";
import { useTheme } from "@react-navigation/native";

interface Props {
  onPress?: Function;
  color: "primary" | "card";

  pic: ImageSourcePropType;

  txt_1: String;
  txt_2: String;
  txt_3: String;
}

const SearchCard = ({ onPress, color, txt_1, txt_2, txt_3, pic }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: colors[color] }}
      onPress={onPress}
    >
      <View style={styles.imgContainer}>
        <Image resizeMode="stretch" source={pic} style={styles.image} />
      </View>

      <View style={styles.content}>
        <Texts>{txt_1}</Texts>
        <Texts>{txt_2}</Texts>
        <Texts>{txt_3}</Texts>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
