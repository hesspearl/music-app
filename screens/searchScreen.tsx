import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeadPhone from "../assets/image/head-phone.svg";
import PlayButton from "../assets/image/play-button.svg";
import { searchArtist } from "../store/action/action";
import { RootState } from "../store/reducer/root";
import SearchCard from "../components/searchCard";
import { ProfileScreenNavigationProp } from "../index";
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
    dispatch(searchArtist(text));
  };

  return (
    <View style={styles.container}>
      <HeadPhone width="100" height="241" />
      <PlayButton width="177" height="128" />
      <View style={styles.search}>
        <View style={styles.input}>
          <TextInput
            placeholder="Search for artist.."
            value={text}
            onChangeText={(text: string) => setText(text)}
          />
        </View>

        <TouchableOpacity style={styles.imgContainer} onPress={pressHandler}>
          <Image
            style={styles.image}
            source={require("../assets/search.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", padding: 15 }}>
        <SearchCard
          pic={require("../assets/image/profile-pic-nirvana.jpg")}
          txt_1="Nirvana"
          txt_2="Rock"
          txt_3="Band"
          color="primary"
          onPress={() => props.navigation.navigate("artistProfile")}
        />
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

  search: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 20,
    height: 20,
  },
  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FFDFF7",
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;
