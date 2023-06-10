import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { REDIRECT_URL } from "@env";

import { RootStackParamList } from "src/types/navigation.type";
import { ROUTE, SCREENS } from "src/navigation/route";

export const loginRedirectUrl = `${REDIRECT_URL}/--/welcome`;

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
