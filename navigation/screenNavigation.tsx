import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import searchScreen from "../screens/searchScreen";
import artistReviewScreen from "../screens/artistReviewScreen";

const BodyStack = createStackNavigator<BodyStackParamList>();

export const ScreenNavigator = () => {
  return (
    <BodyStack.Navigator screenOptions={{ header: () => null }}>
      <BodyStack.Screen name="search" component={searchScreen} />
      <BodyStack.Screen name="artistReview" component={artistReviewScreen} />
      {/* <BodyStack.Screen name="details" component={}  />
        <BodyStack.Screen name="create" component={}  /> */}
    </BodyStack.Navigator>
  );
};