import StackNavigation, { StackProps } from "./stack.navigation";
import { ROUTE, SCREENS } from "./route";
import { useAuth } from "src/hooks/context/useAuth";

const authRoutes: StackProps[] = [
  {
    name: ROUTE.welcome,
    component: SCREENS[ROUTE.welcome],
    headerShown: false,
  },
  {
    name: ROUTE.login,
    component: SCREENS[ROUTE.login],
    headerShown: true,
    headerName: "",
  },
];

const dashboardRoutes: StackProps[] = [
  {
    name: ROUTE.home,
    component: SCREENS[ROUTE.home],
    headerShown: false,
  },
  {
    name: ROUTE.gas,
    component: SCREENS[ROUTE.gas],
    headerShown: true,
    headerName: "",
  },
  {
    name: ROUTE.service,
    component: SCREENS[ROUTE.service],
    headerShown: true,
    headerName: "",
  },
];

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();
  return (
    <StackNavigation
      routes={isAuthenticated ? dashboardRoutes : authRoutes}
      initialRoute={isAuthenticated ? ROUTE.home : ROUTE.welcome}
    />
  );
};
export default AppNavigator;
