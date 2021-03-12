declare module "*.svg";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type BodyStackParamList = {
  search: undefined;
  artistProfile: {
    initialParams: {
      id: number;
    };
  };
  release: undefined;
  releaseReview: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<BodyStackParamList>;
type ProfileScreenRouteProp = RouteProp<BodyStackParamList>;
