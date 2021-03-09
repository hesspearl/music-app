import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { defaultTheme } from "../style/theme";
import { ScreenNavigator } from "./screenNavigation";

const AppNavigation = () => {
  return (
    <NavigationContainer theme={defaultTheme}>
      <ScreenNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
