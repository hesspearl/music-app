import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import searchScreen from "../screens/searchScreen";
import artistProfileScreen from "../screens/artistProfileScreen";
import ReleaseScreen from "../screens/releaseScreen";
import ArtistReleaseScreen from "../screens/artistReleaseScreen";

type BodyStackParamList = {
  search: undefined;
  artistProfile: {
    id: number;
  };
  release: undefined;
  artistRelease: undefined;
};
const BodyStack = createStackNavigator<BodyStackParamList>();

export const ScreenNavigator = () => {
  return (
    <BodyStack.Navigator screenOptions={{ header: () => null }}>
      <BodyStack.Screen name="search" component={searchScreen} />
      <BodyStack.Screen
        name="artistProfile"
        initialParams={{ id: 125246 }}
        component={artistProfileScreen}
      />
      <BodyStack.Screen name="release" component={ReleaseScreen} />
      <BodyStack.Screen name="artistRelease" component={ArtistReleaseScreen} />
    </BodyStack.Navigator>
  );
};
