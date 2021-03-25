import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
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

interface artistTypes {
  thumb: string;
  title: String;
  genre: String;
  style: String;
}
const artistReviewScreen = (props: Props) => {
  const { colors } = useTheme();
  const { id } = props.route.params;
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.release);
  const [artist, setArtist] = useState<artistTypes>({
    thumb: "",
    title: "",
    genre: "",
    style: "",
  });

  useEffect(() => {
    dispatch(requestArtistAction(id));
    dispatch(requestReleasesAction(id, "artists"));
    getArtistData();
  }, [id]);

  const getArtistData = () => {
    const data = state.artists.filter((artist) => artist.id === id);
    const artist = { ...data[0] };

    setArtist(artist);
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
            <Texts style={styles.text}> {artist.title}</Texts>

            <Texts style={styles.text}> {artist.genre}</Texts>

            <Texts style={styles.text}> {artist.style}</Texts>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView style={styles.paragraphContainer}>
            <Text style={{ ...styles.paragraph, color: colors.text }}>
              {state.artist.profile}
            </Text>
          </ScrollView>
        </View>
      </View>
      {/* <Text style={{ ...styles.text, color: colors.card }}> Members</Text> */}
      <View style={{ ...styles.titles, alignItems: "flex-start" }}>
        <Text style={{ ...styles.text, color: colors.card }}> Releases</Text>
      </View>

      <View style={styles.releases}>
        {mainAlbums.map((release) => (
          <View key={release.id}>
            <Releases
              onPress={() =>
                props.navigation.navigate("release", { id: release.id })
              }
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
