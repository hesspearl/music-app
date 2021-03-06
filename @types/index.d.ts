declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
declare module "*.jpg";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type BodyStackParamList = {
  search: undefined;
  artistProfile: {
    id: number;
  };
  release: {
    id: number;
  };
  artistReleases: undefined;
  label: {
    id: Number;
  };
};

type ProfileScreenNavigationProp = StackNavigationProp<BodyStackParamList>;
type ProfileScreenRouteProp = RouteProp<BodyStackParamList>;
