import { StyleSheet } from "react-native";
import { tokens } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    width: '100%',
    backgroundColor: '#f1f1f1',
    height: 'auto',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content:{
    flex: 1,
    paddingBottom: 40,
    paddingHorizontal: 5,
    paddingTop: 10,
    backgroundColor: tokens.bgColorList
  },
  title: {
    marginBottom: 5,
    fontWeight: '500',
  },
  containerView: {
    padding: 20
  },
  viewTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  viewArt: {
    fontSize: 14,
    marginBottom: 20
  },
  viewContent: {
    fontSize: 18,
    lineHeight: 24
  }
})