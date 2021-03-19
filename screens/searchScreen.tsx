import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeadPhone from "../assets/image/head-phone.svg";
import PlayButton from "../assets/image/play-button.svg";
import Search from "../assets/search.svg";
import { requestSearchArtist } from "../store/action/action";
import { RootState } from "../store/reducer/root";
import SearchCard from "../components/searchCard";
import { ProfileScreenNavigationProp } from "../@types/index";
import AntDesign from "react-native-vector-icons/AntDesign";

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const SearchScreen = ({ ...props }: Props) => {
  const [text, setText] = useState("");
  const state = useSelector((state: RootState) => state.release);
  const dispatch = useDispatch();

  const pressHandler = () => {
    console.log("click");
    dispatch(requestSearchArtist(text));
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

      <View style={{ flex: 1, width: "100%", padding: 15 }}>
        <ScrollView>
          {!state.artist.length ? (
            <SearchCard
              id={1}
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
            />
          ) : (
            state.artist.map((artist) => (
              <SearchCard
                id={artist.id}
                pic={artist.thumb}
                txt_1={artist.name}
                txt_2={artist.genere}
                txt_3={artist.style}
                color="primary"
                onPress={() =>
                  props.navigation.navigate("artistProfile", {
                    initialParams: { id: artist.id },
                  })
                }
              />
            ))
          )}
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
});

export default SearchScreen;
