import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import searchScreen from "../screens/searchScreen";
import artistReviewScreen from "../screens/artistReviewScreen";
import ReleaseScreen from "../screens/releasesScreen";
import ReleaseReviewScreen from "../screens/releaseReviewScreen";

type BodyStackParamList = {
  search: undefined;
  artistReview: undefined;
  release: undefined;
  releaseReview: undefined;
};
const BodyStack = createStackNavigator<BodyStackParamList>();

export const ScreenNavigator = () => {
  return (
    <BodyStack.Navigator screenOptions={{ header: () => null }}>
      <BodyStack.Screen name="search" component={searchScreen} />
      <BodyStack.Screen name="artistReview" component={artistReviewScreen} />
      <BodyStack.Screen name="release" component={ReleaseScreen} />
      <BodyStack.Screen name="releaseReview" component={ReleaseReviewScreen} />
    </BodyStack.Navigator>
  );
};
