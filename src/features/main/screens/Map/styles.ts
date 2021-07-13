import { colors } from '@constants/vars';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  //Item
  btnCircle: {
    flex: 1,
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
    shadowOpacity: 0.25,
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
    justifyContent: 'space-around',
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
    height: 60,
    width: 60,
    backgroundColor: 'red',
    borderRadius: 30,
  },
  lineStyle: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 20,
  },
  containerTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  btnValidateContainer: {
    height: 60,
    paddingHorizontal: 40,
    marginVertical: 30,
  },
  btnValidate: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: 'white',

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    elevation: 5,
    shadowColor: colors.BLUE,
  },
});
export default styles;
