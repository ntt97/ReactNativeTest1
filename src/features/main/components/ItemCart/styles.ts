import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  //Item
  btnCircle: {
    // flex: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
  itemContainer: {
    height: 180,
    flexDirection: 'row',
  },
  itemLeftContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageStyle: {
    height: 150,
    borderRadius: 30,
  },
  txtPrice: {
    fontWeight: 'bold',
    color: 'gray',
    alignSelf: 'center',
  },
  itemRightContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 25,
  },
  itemTopRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtItemTopRight: {
    fontSize: 18,
    color: 'gray',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemCenterRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  itemBottomRight: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtCount: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  btnCartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnCart: {
    height: 50,
    width: 50,
    borderRadius: 30,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCart: {
    height: 30,
    width: 30,
  },
  btnRemove: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
export default styles;
