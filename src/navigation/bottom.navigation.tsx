import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { ROUTE } from "./route";
import { Box } from "native-base";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE.log}
      screenOptions={{
        headerShown: false, // hide header
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          textTransform: "capitalize",
        },
        tabBarStyle: {
          height: 100,
          elevation: 0,
          backfaceVisibility: "hidden",
          backgroundColor: "white",
          borderTopColor: "transparent",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name={ROUTE.log}
        component={() => <Box>hello Logs</Box>}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={28}
              color={focused ? "#00DCFB" : "#8B8D8E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.profile}
        component={() => <Box>hello Profile</Box>}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={28}
              color={focused ? "#00DCFB" : "#8B8D8E"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
