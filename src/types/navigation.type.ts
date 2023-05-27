import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  [key: string]: undefined;
};

export type SettingsScreenTabParamList = {
  [key: string]: undefined;
};

export type NavigationProp = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;
