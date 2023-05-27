import StackNavigation, { StackProps } from "./stack.navigation";
import { ROUTE } from "./route";

import BottomNavigation from "./bottom.navigation";
import { Box, Center, Text } from "native-base";
import Welcome from "src/modules/auth/screens/welcome";
import Login from "src/modules/auth/screens/login";

const authRoutes: StackProps[] = [
  {
    name: ROUTE.welcome,
    component: Welcome,
    headerShown: false,
  },
  {
    name: ROUTE.login,
    component: Login,
    headerShown: true,
    headerName: "",
  },
];

const AppNavigator = () => {
  return <StackNavigation routes={authRoutes} initialRoute={ROUTE.welcome} />;
};
export default AppNavigator;
