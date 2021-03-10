import React from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";

interface Props {
  children: String;
  style?: TextStyle;
}
const Texts = ({ children, style }: Props) => {
  return <Text style={{ ...style, ...styles.txt }}>{children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    color: "#D392FC",
    fontWeight: "bold",
  },
});

export default Texts;
