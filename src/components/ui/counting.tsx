import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteType } from '../routes/RouteType';
import { Add, Minus } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';
import { decreaseQuantity, increaseQuantity } from '../../store/slice/cartSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';

type Props = RouteType<'counting'>;

const Counting: React.FC<Props> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(decreaseQuantity(product.id))}
        style={styles.button}
      >
        <Minus color={AppColors.WHITE} />
      </TouchableOpacity>
      <Text style={styles.quantity}>{product.quantity}</Text>
      <TouchableOpacity
        onPress={() => dispatch(increaseQuantity(product.id))}
      style={styles.button}>
        <Add color={AppColors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: AppColors.PRIMARY,
    padding: 4,
    borderRadius: 100,
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Counting;
