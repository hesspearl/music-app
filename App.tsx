import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SearchScreen from "./screens/searchScreen";
import { Provider } from "react-redux";
import { store } from "./store/reducer/root";

export default function App() {
  return (
    <Provider store={store}>
      <SearchScreen />
    </Provider>
  );
}
