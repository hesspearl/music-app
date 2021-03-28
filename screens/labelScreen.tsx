import React, { useEffect, useState } from "react";
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
import { requestReleasesAction } from "../store/action/action";
import SearchCard from "../components/searchCard";

interface Props {
  route: ProfileScreenRouteProp;
}

const LabelReleasesScreen = (props: Props) => {
  const { id } = props.route.params;
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.release);
  const [label, setLabel] = useState<{ title: String }>({ title: "" });

  useEffect(() => {
    dispatch(requestReleasesAction(id, "labels"));
    getLabelData();
  }, [id]);

  const getLabelData = () => {
    const label = state.labels.filter((label) => label.id === id);

    setLabel({ ...label[0] });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.poster}
          source={{
            uri:
              "https://cdn.iconscout.com/icon/free/png-256/queue-music-1779820-1513985.png ",
          }}
        />
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Texts style={styles.text}> label name : {label.title}</Texts>
          </View>
        </View>

        <View style={styles.titles}>
          <Text style={styles.text}> Releases List</Text>
        </View>
        <View style={styles.list}>
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            {state.releases.map((release) => (
              <View key={release.id} style={styles.cardContainer}>
                <View>
                  <Text style={styles.text}>{release.title}</Text>
                  <Text style={styles.text}>{release.artist}</Text>
                  <Text style={styles.text}>{release.format}</Text>
                </View>
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
    height: "65%",
    borderRadius: 10,
    padding: 20,
    elevation: 10,
    marginTop: 10,
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
  cardContainer: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#DCF0FF",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    elevation: 10,
  },
});

export default LabelReleasesScreen;
