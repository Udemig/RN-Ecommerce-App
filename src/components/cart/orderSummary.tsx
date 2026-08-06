import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteType } from '../routes/RouteType';
import AppColors from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = RouteType<'orderSummary'>;

const OrderSummary: React.FC<Props> = ({ navigation, route }) => {
  const {cart}=useSelector((state:RootState)=>state.cart)
  const totalPrice=cart.reduce((total,item)=>total + item.quantity*item.price,0)
  const totalProductCount=cart.length
  if(totalProductCount==0)
    return null
  return (
    <View style={styles.container}>
      <Text style={styles.orderSummary}>Order Summary </Text>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>Items</Text>
        <Text style={styles.item}>{totalProductCount}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>Subtotal</Text>
        <Text style={styles.item}>$0</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>Discount</Text>
        <Text style={styles.item}>%3</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.item}>Delivery Charges</Text>
        <Text style={styles.item}>0</Text>
      </View>
        <View style={styles.totalContainer}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>${totalPrice-totalPrice*3/100}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.SOFTGRAY,
    padding: 15,
    borderRadius: 10,
  },
  orderSummary: {
    fontSize: 18,
    fontWeight: '700',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
   totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderTopWidth:1,
    paddingVertical:10,
    borderColor:AppColors.GRAY
  },
  item: {
    fontSize: 18,
  },
   total: {
    fontSize: 21,
    fontWeight:"600"
  },
});

export default OrderSummary;
