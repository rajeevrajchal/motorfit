import Login from "src/modules/auth/screens/login";
import Welcome from "src/modules/auth/screens/welcome";
import BottomNavigation from "./bottom.navigation";
import Profile from "src/modules/dashboard/module/profile";
import Logs from "src/modules/dashboard/module/logs";
import Gas from "src/modules/dashboard/module/logs/screens/gas";
import Services from "src/modules/dashboard/module/logs/screens/services";

export const ROUTE = {
  initial: "home",

  // auth
  welcome: "welcome",
  login: "login",
  login_success: "login_success",
  onboarding: "onboarding",

  home: "home",
  log: "log",
  gas: "gas",
  add_gas: "add gas",
  maintenance: "maintenance",
  service: "service",
  tax: "tax",
  clearance: "clearance",

  profile: "profile",
  edit_profile: "edit profile",

  notification: "notification",
  vehicle: "vehicle",
  add_vehicle: "add vehicle",
  subscription: "subscription",
  policy: "policy",
};

export const SCREENS: { [key: string]: React.ComponentType<any> } = {
  [ROUTE.welcome]: Welcome,
  [ROUTE.login]: Login,

  [ROUTE.home]: BottomNavigation,
  [ROUTE.log]: Logs,
  [ROUTE.profile]: Profile,
  [ROUTE.gas]: Gas,
  [ROUTE.service]: Services,
  // ... add other screen components
};
