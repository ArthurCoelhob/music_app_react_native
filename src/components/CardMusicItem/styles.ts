import { StyleSheet } from 'react-native';
import { tokens } from '../../styles/global'

export const styles = StyleSheet.create({
  content: {
    backgroundColor: '#f1f1f1',
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    padding: 8,
    borderRadius: 4,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    paddingRight: 15,
    
  },
  logo: {
    width: 100,
    height: 100
  },
  image: {
    width: 100
  },
  texts: {
    paddingLeft: 15,
    flex: 1
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  }, 
  btnCancel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    borderRadius: 5,
    marginEnd: 10,
    backgroundColor: '#854d0e',
  },
  btnText: {
    color: '#fff'
  },
  btnView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: tokens.bgColorDark,
    marginRight: 5,
    borderRadius: 5
  },
  btnSave: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#3f6212',
    borderRadius: 5
  },
  modal: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    padding: 10,
  },
  modalText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10
  },
  select: {
    flex: 1,
    backgroundColor: tokens.bgColorDark,
    color: tokens.primaryColor
  },
  selectItem: {
    backgroundColor: tokens.bgColorDark,
    color: tokens.primaryColor
  },
  btConfirm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#3f6212',
    marginHorizontal: 10,
    borderRadius: 5
  }
})