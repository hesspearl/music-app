import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeadPhone from "../assets/image/head-phone.svg";
import PlayButton from "../assets/image/play-button.svg";
import { searchArtist } from "../store/action/action";
import { RootState } from "../store/reducer/root";
import SearchCard from "../components/searchCard";
import { ProfileScreenNavigationProp } from "../declarations";

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
      <View style={styles.input}>
        <TextInput
          placeholder="Search for artist.."
          value={text}
          onChangeText={(text: string) => setText(text)}
        />
      </View>
      <Button title="press" onPress={pressHandler} />

      <SearchCard onPress={() => props.navigation.navigate("artistReview")} />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 50,
    backgroundColor: "#FFDFF7",
    margin: 10,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#DEAAFF",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
});

export default SearchScreen;
