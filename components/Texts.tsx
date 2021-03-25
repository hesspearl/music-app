import React, { FC } from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";

interface Props {
  style?: TextStyle;
}
const Texts: FC<Props> = ({ children, style }) => {
  return <Text style={{ ...style, ...styles.txt }}>{children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    color: "#D392FC",
    fontWeight: "bold",
  },
});

export default Texts;
