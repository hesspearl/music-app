declare module "*.svg";

import { StackNavigationProp } from "@react-navigation/stack";

type BodyStackParamList = {
  search: undefined;
  artistReview: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<BodyStackParamList>;
