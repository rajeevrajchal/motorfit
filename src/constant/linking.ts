import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "src/types/navigation.type";
import { ROUTE, SCREENS } from "src/navigation/route";

export const loginRedirectUrl = "exp://192.168.101.10:19000/--/welcome";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: Object.keys(ROUTE).reduce((screensConfig, route) => {
      if (SCREENS[route]) {
        screensConfig[route] = route;
      }
      return screensConfig;
    }, {} as { [key: string]: string }),
  },
};

export default linking;
