import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./store/reducer/root";
import AppNavigation from "./navigation/navigationContainer";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
