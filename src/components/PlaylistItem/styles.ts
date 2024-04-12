import { StyleSheet } from 'react-native';
import { tokens } from '../../styles/global'

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f1f1f1',
    marginBottom: 15,
    display: 'flex',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  text: {
    backgroundColor: '#eee',   
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    paddingRight: 10,
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
  btnEdit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#3f6212',
    marginRight: 5,
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  },
  btnDelete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#854d0e',
    borderRadius: 5
  },
  name: {
    width: '100%',
    fontWeight: '600'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10
  }
})