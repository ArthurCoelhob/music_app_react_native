import { StyleSheet } from "react-native";
import { tokens } from "../../styles/global";

export const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 8
  },
  input: {
    width: '80%',
    backgroundColor: tokens.bgColor,
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 10
  },
  styleBtn: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '20%',
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.bgColorDark,
    borderTopEndRadius: 4,
    borderBottomEndRadius: 4
  },
})