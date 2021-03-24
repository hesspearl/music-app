import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeadPhone from "../assets/image/head-phone.svg";
import PlayButton from "../assets/image/play-button.svg";
import Search from "../assets/search.svg";
import { requestSearchAction } from "../store/action/action";
import { RootState } from "../store/reducer/root";
import SearchCard from "../components/searchCard";
import { ProfileScreenNavigationProp } from "../@types/index";
import AntDesign from "react-native-vector-icons/AntDesign";

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const SearchScreen = ({ ...props }: Props) => {
  const [text, setText] = useState<String>("");
  const [label, setLabel] = useState<Boolean>(false);

  const state = useSelector((state: RootState) => state.release);
  const dispatch = useDispatch();

  const pressHandler = () => {
    dispatch(requestSearchAction(text));
  };

  return (
    <View style={styles.container}>
      <HeadPhone width="100" height="241" />
      <PlayButton width="177" height="128" />

      <View style={styles.searchContainer}>
        <View style={styles.input}>
          <TextInput
            placeholder="Search for artist.."
            value={text}
            onChangeText={(text: string) => setText(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={pressHandler}>
          <Search width="25" height="25" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ ...styles.label, elevation: label ? 0 : 10 }}
        onPress={() => setLabel(!label)}
      >
        <Text style={{ color: "#DEAAFF", fontWeight: "bold" }}>Label</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, width: "100%", padding: 15 }}>
        <ScrollView>
          {/* {!state.artists.length ? (
            <SearchCard
              pic={require("../assets/image/profile-pic-nirvana.jpg")}
              txt_1="Nirvana"
              txt_2="Rock"
              txt_3="Band"
              color="primary"
              onPress={() =>
                props.navigation.navigate("artistProfile", {
                  initialParams: { id: 1 },
                })
              }
            /> */}
          {label
            ? state.labels.map((label) => (
                <View key={label.id}>
                  <SearchCard
                    pic={{
                      uri:
                        "https://cdn.iconscout.com/icon/free/png-256/queue-music-1779820-1513985.png ",
                    }}
                    txt_1={label.title}
                    txt_2={label.type}
                    txt_3={label.style}
                    color="primary"
                    onPress={() =>
                      props.navigation.navigate("label", {
                        id: label.id,
                      })
                    }
                  />
                </View>
              ))
            : state.artists.map((artist) => (
                <View key={artist.id}>
                  <SearchCard
                    pic={{ uri: artist.cover_image }}
                    txt_1={artist.title}
                    txt_2={artist.type}
                    txt_3={artist.style}
                    color="primary"
                    onPress={() =>
                      props.navigation.navigate("artistProfile", {
                        id: artist.id,
                      })
                    }
                  />
                </View>
              ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFDFF7",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#DEAAFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#FFDFF7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
  },

  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    width: 60,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#FFDFF7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default SearchScreen;
