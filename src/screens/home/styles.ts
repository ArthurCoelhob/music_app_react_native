import { StyleSheet } from "react-native";
import { tokens } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.bgColorDark,
    paddingTop: 60,
  },
  logo: {
    flex: 1,
    width: 250,
    height: 50
  },
  wrapperLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  welcome: {
    color: '#fff',
    fontSize: 28,
    marginVertical: 20
  },
  resume: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
  resumeText: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 30
  }
})