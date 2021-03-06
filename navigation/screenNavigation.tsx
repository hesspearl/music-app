import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import searchScreen from "../screens/searchScreen";
import artistProfileScreen from "../screens/artistProfileScreen";
import artistReleasesScreen from "../screens/artistReleasesScreen";
import releaseScreen from "../screens/releaseScreen";
import labelReleasesScreen from "../screens/labelScreen";

type BodyStackParamList = {
  search: undefined;
  artistProfile: {
    id: number;
  };
  release: {
    id: Number;
  };
  artistReleases: undefined;
  label: {
    id: Number;
  };
};
const BodyStack = createStackNavigator<BodyStackParamList>();

export const ScreenNavigator = () => {
  return (
    <BodyStack.Navigator screenOptions={{ header: () => null }}>
      <BodyStack.Screen name="search" component={searchScreen} />
      <BodyStack.Screen name="artistProfile" component={artistProfileScreen} />
      <BodyStack.Screen
        name="artistReleases"
        component={artistReleasesScreen}
      />
      <BodyStack.Screen name="release" component={releaseScreen} />
      <BodyStack.Screen name="label" component={labelReleasesScreen} />
    </BodyStack.Navigator>
  );
};
