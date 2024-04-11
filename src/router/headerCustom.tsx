import { View } from "react-native";
import { tokens } from "../styles/global";

export const headerCustom = {
  headerBackground: () => <View style={{ flex: 1, backgroundColor: tokens.bgColorDark, }} />,
  headerTintColor: tokens.primaryColor
}