import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, StyleSheet } from "react-native";
import SearchCard from "../components/searchCard";
import { ProfileScreenNavigationProp } from "../@types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducer/root";

interface Props {
  navigation: ProfileScreenNavigationProp;
}
const ReleaseScreen = (props: Props) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.release.releases);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <SearchCard
            pic={require("../assets/image/R-14071641-1567294823-6082.jpeg.jpg")}
            txt_1="Live and Loud"
            txt_2="DGC,UME"
            txt_3="2013"
            color="card"
            onPress={() => props.navigation.navigate("release")}
          />
          {state.map((release) => (
            <View key={release.id}>
              <SearchCard
                pic={require("../assets/image/R-14071641-1567294823-6082.jpeg.jpg")}
                txt_1={release.title}
                txt_2={release.label}
                txt_3={release.year}
                color="card"
                onPress={() => props.navigation.navigate("release")}
              />
            </View>
          ))}
        </ScrollView>
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
    width: "90%",
    height: "95%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});
export default ReleaseScreen;
