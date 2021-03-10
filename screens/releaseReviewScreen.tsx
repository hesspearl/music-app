import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, StyleSheet } from "react-native";
import Texts from "../components/Texts";

const ReleaseReviewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.poster}
          source={require("../assets/image/R-14071641-1567294823-6082.jpeg.jpg")}
        />
        <View style={styles.header}>
          <View style={styles.imgContainer}>
            <Image
              source={require("../assets/image/profile-pic-nirvana.jpg")}
              style={styles.avatar}
            />
          </View>

          <View style={styles.textContainer}>
            <Texts> Nirvana</Texts>
            <Texts> Rock Band</Texts>
            <Texts> USA</Texts>
          </View>
        </View>
        <View style={styles.label}>
          <Text style={{ color: "#DCF0FF" }}>Label</Text>
        </View>
        <View style={styles.titles}>
          <Text style={styles.text}> Track List</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>Radio Friendly Unit Shifter</Text>
          <Text style={styles.text}>Drain you</Text>
          <Text style={styles.text}>Breed</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    backgroundColor: "#DCF0FF",
    width: "80%",
    height: "95%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  poster: {
    width: 150,
    height: 150,
  },
  header: {
    alignSelf: "flex-start",
    flexDirection: "row",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  imgContainer: {
    height: "100%",
    margin: 5,
  },
  textContainer: {
    margin: 5,
  },
  label: {
    width: 60,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#DEAAFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    elevation: 10,
  },
  list: {
    backgroundColor: "#FFDFF7",
    width: "90%",
    height: "50%",
    borderRadius: 10,
    padding: 20,

    alignItems: "flex-start",
  },
  titles: {
    width: "100%",
    alignItems: "flex-start",
    marginStart: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#D392FC",
  },
});

export default ReleaseReviewScreen;
