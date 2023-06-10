import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { ROUTE } from "src/navigation/route";

const logsMenu = [
  {
    label: "gas",
    featureEnable: true,
    icon: <FontAwesome5 name="gas-pump" size={32} color="#565D5E" />,
    url: ROUTE?.gas || "gas",
  },
  {
    label: "maintenance",
    featureEnable: true,
    icon: <AntDesign name="setting" size={32} color="#565D5E" />,
    url: ROUTE?.maintenance || "maintenance",
  },
  {
    label: "services",
    featureEnable: true,
    icon: <AntDesign name="exception1" size={32} color="#565D5E" />,
    url: ROUTE?.service || "service",
  },
  {
    label: "tax",
    featureEnable: true,
    icon: <Feather name="tag" size={32} color="#565D5E" />,
    url: ROUTE?.tax || "tax",
  },
  // {
  //   label: "clearance",
  //   featureEnable: false,
  //   icon: <AntDesign name="Safety" size={32} color="#565D5E" />,
  //   url: ROUTE?.clearance,
  // },
];

export default logsMenu;
