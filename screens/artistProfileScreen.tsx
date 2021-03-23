import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Texts from "../components/Texts";
import { useTheme } from "@react-navigation/native";
import Releases from "../components/releases";
import { ProfileScreenNavigationProp, ProfileScreenRouteProp } from "../@types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducer/root";
import {
  requestArtistAction,
  requestReleasesAction,
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
  const [artist, setArtist] = useState({});

  useEffect(() => {
    dispatch(requestArtistAction(id));
    dispatch(requestReleasesAction(id, "artists"));
    getArtistData();
  }, [id]);

  const getArtistData = () => {
    const artist = state.artists.filter((artist) => artist.id === id);

    setArtist({ ...artist[0] });
  };

  const mainAlbums = state.releases.slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.imgContainer}>
            {!state.artist ? (
              <Image
                source={require("../assets/image/profile-pic-nirvana.jpg")}
                style={styles.image}
              />
            ) : (
              <Image source={{ uri: artist.thumb }} style={styles.image} />
            )}
          </View>

          <View style={styles.textContainer}>
            {!state.artist ? (
              <Texts style={styles.text}> Nirvana</Texts>
            ) : (
              <Texts style={styles.text}> {artist.title}</Texts>
            )}
            {!state.artist ? (
              <Texts style={styles.text}> Rock Band</Texts>
            ) : (
              <Texts style={styles.text}> {artist.genere}</Texts>
            )}
            {!state.artist ? (
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
            <ScrollView style={styles.paragraphContainer}>
              <Text style={{ ...styles.paragraph, color: colors.text }}>
                {state.artist.profile}
              </Text>
            </ScrollView>
          )}
        </View>
      </View>
      {/* <Text style={{ ...styles.text, color: colors.card }}> Members</Text> */}
      <View style={{ ...styles.titles, alignItems: "flex-start" }}>
        <Text style={{ ...styles.text, color: colors.card }}> Releases</Text>
      </View>

      <View style={styles.releases}>
        {!state.releases && (
          <Releases
            onPress={() => props.navigation.navigate("release")}
            title="Love Buzz b/w Big Cheese"
            pic={require("../assets/image/R-14071641-1567294823-6082.jpeg.jpg")}
          />
        )}
        {mainAlbums.map((release) => (
          <View key={release.id}>
            <Releases
              onPress={() => props.navigation.navigate("release")}
              title={release.title}
              pic={{ uri: release.thumb }}
            />
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={{ ...styles.titles, alignItems: "flex-end" }}
        onPress={() => props.navigation.navigate("artistReleases")}
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

  paragraphContainer: {
    height: "60%",
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
