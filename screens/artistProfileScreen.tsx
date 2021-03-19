import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Texts from "../components/Texts";
import { useTheme } from "@react-navigation/native";
import Releases from "../components/releases";
import { ProfileScreenNavigationProp, ProfileScreenRouteProp } from "../@types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducer/root";
import {
  requestArtistAction,
  requestReleaseAction,
} from "../store/action/action";

interface Props {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
}
const artistReviewScreen = (props: Props) => {
  const { colors } = useTheme();
  const { id } = props.route.params;
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.release);
  const [artist, setArtist] = useState([]);

  // useEffect(() => {
  // dispatch(requestArtistAction(id))
  // dispatch(requestReleaseAction(id, "artists"))

  // }, [id])

  const getArtistData = () => {
    const artist = state.artists.filter((artist) => artist.id === id);

    setArtist(artist);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.imgContainer}>
            {!artist ? (
              <Image
                source={require("../assets/image/profile-pic-nirvana.jpg")}
                style={styles.image}
              />
            ) : (
              <Image source={artist.thumb} style={styles.image} />
            )}
          </View>

          <View style={styles.textContainer}>
            {!artist ? (
              <Texts style={styles.text}> Nirvana</Texts>
            ) : (
              <Texts style={styles.text}> {artist.name}</Texts>
            )}
            {!artist ? (
              <Texts style={styles.text}> Rock Band</Texts>
            ) : (
              <Texts style={styles.text}> {artist.genere}</Texts>
            )}
            {!artist ? (
              <Texts style={styles.text}> USA</Texts>
            ) : (
              <Texts style={styles.text}> {artist.style}</Texts>
            )}
          </View>
        </View>
        <View style={styles.body}>
          {!state.artist ? (
            <Text style={{ ...styles.paragraph, color: colors.text }}>
              Nirvana formed in 1987. Considered by many to be the leading
              lights of the Seattle grunge scene of the late 1980s/early
              1990s.and perhaps the most influential rock band of Generations X
              & Y, Nirvana was a powerful trio of musicians who brought a unique
              aesthetic to a growing-stale rock scene.
            </Text>
          ) : (
            <Text style={{ ...styles.paragraph, color: colors.text }}>
              {state.artist.profile}
            </Text>
          )}
        </View>
      </View>
      {/* <Text style={{ ...styles.text, color: colors.card }}> Members</Text> */}
      <View style={{ ...styles.titles, alignItems: "flex-start" }}>
        <Text style={{ ...styles.text, color: colors.card }}> Releases</Text>
      </View>

      <View style={styles.releases}>
        {!state.releases ? (
          <Releases
            onPress={() => props.navigation.navigate("artistRelease")}
            title="Love Buzz b/w Big Cheese"
            pic={require("../assets/image/R-14071641-1567294823-6082.jpeg.jpg")}
          />
        ) : (
          <Releases
            onPress={() => props.navigation.navigate("artistRelease")}
            title={state.releases.title}
            pic={require("../assets/image/R-14071641-1567294823-6082.jpeg.jpg")}
          />
        )}
      </View>

      <TouchableOpacity
        style={{ ...styles.titles, alignItems: "flex-end" }}
        onPress={() => props.navigation.navigate("release")}
      >
        <Text style={{ ...styles.text, color: colors.card }}>
          {" "}
          Show All {">"}{" "}
        </Text>
      </TouchableOpacity>
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
    height: "50%",
    borderRadius: 10,

    padding: 5,

    marginVertical: 50,
  },
  header: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  imgContainer: {
    height: "100%",
    margin: 15,
    flex: 1,
  },
  textContainer: {
    marginStart: 20,
    flex: 3,
    margin: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    paddingHorizontal: 30,
  },
  paragraph: {
    fontSize: 17,
  },
  releases: {
    flexDirection: "row",
  },
  titles: {
    width: "100%",

    padding: 10,
  },
});

export default artistReviewScreen;
