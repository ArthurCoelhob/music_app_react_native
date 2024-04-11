import { StyleSheet } from 'react-native';
import { tokens } from '../../styles/global'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flex: 1,
      padding: 15,
      width: '100%',
      backgroundColor: '#f1f1f1',
      height: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      flex: 1,
      backgroundColor: tokens.bgColorDark,
      paddingVertical: 5,
      paddingHorizontal: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      borderRadius: 3
    },
    buttonText: {
      fontSize: 12,
      color: tokens.primaryColor,
      fontWeight: '500'
    },
    content:{
      flex: 15,
      padding: 15,
      paddingBottom: 150
    },
    title: {
      flex: 2,
      fontSize: 16,
      fontWeight: '500',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

}
);