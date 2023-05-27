import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "src/types/navigation.type";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      // Signin: "signin",
      // Signup: "signup",
      // List: "list",
      // Settings: "settings",
    },
  },
};

export default linking;
