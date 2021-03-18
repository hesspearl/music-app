import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView, StyleSheet } from "react-native";
import SearchCard from "../components/searchCard";
import { ProfileScreenNavigationProp } from "../@types";

interface Props {
  navigation: ProfileScreenNavigationProp;
}
const ReleaseScreen = (props: Props) => {
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
            onPress={() => props.navigation.navigate("releaseReview")}
          />

          <SearchCard
            pic={require("../assets/image/R-2070548-1554732548-3612.jpeg.jpg")}
            txt_1="Live at reading"
            txt_2="DGC,UME"
            txt_3="2009"
            color="card"
          />
          <SearchCard
            pic={require("../assets/image/R-2070548-1554732548-3612.jpeg.jpg")}
            txt_1="Live at reading"
            txt_2="DGC,UME"
            txt_3="2009"
            color="card"
          />
          <SearchCard
            pic={require("../assets/image/R-2070548-1554732548-3612.jpeg.jpg")}
            txt_1="Live at reading"
            txt_2="DGC,UME"
            txt_3="2009"
            color="card"
          />
          <SearchCard
            pic={require("../assets/image/R-2070548-1554732548-3612.jpeg.jpg")}
            txt_1="Live at reading"
            txt_2="DGC,UME"
            txt_3="2009"
            color="card"
          />
          <SearchCard
            pic={require("../assets/image/R-2070548-1554732548-3612.jpeg.jpg")}
            txt_1="Live at reading"
            txt_2="DGC,UME"
            txt_3="2009"
            color="card"
          />
          <SearchCard
            pic={require("../assets/image/R-2070548-1554732548-3612.jpeg.jpg")}
            txt_1="Live at reading"
            txt_2="DGC,UME"
            txt_3="2009"
            color="card"
          />
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
