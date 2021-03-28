import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Texts from "../components/Texts";
import { ProfileScreenNavigationProp, ProfileScreenRouteProp } from "../@types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducer/root";
import { requestReleaseDataAction } from "../store/action/action";

interface Props {
  route: ProfileScreenRouteProp;
}

const ReleaseReviewScreen = (props: Props) => {
  const { id } = props.route.params;
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.release);

  useEffect(() => {
    dispatch(requestReleaseDataAction(id));
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.poster}
          source={require("../assets/image/album.png")}
        />
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Texts style={styles.text}>
              {" "}
              Album name : {state.release.title}
            </Texts>

            <Texts style={styles.text}>
              Genre : {state.release.genres ? state.release.genres[0] : null}
            </Texts>

            <Texts style={styles.text}>
              Music Style :{" "}
              {state.release.styles ? state.release.styles[0] : null}
            </Texts>
          </View>
        </View>

        <View style={styles.titles}>
          <Text style={styles.text}> Track List</Text>
        </View>
        <View style={styles.list}>
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            {state.release.tracklist?.map((track, index) => (
              <View key={index}>
                <Text style={styles.text}>{track.title}</Text>
              </View>
            ))}
          </ScrollView>
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

    marginVertical: 10,
    alignItems: "center",
  },
  poster: {
    marginTop: 10,
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

  list: {
    backgroundColor: "#FFDFF7",
    width: "90%",
    height: "60%",
    borderRadius: 10,
    padding: 20,
    elevation: 10,
  },
  titles: {
    width: "100%",
    alignItems: "flex-start",
    marginStart: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D392FC",
    marginBottom: 5,
  },
});

export default ReleaseReviewScreen;
