import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteType } from '../routes/RouteType';
import { windowHeight, windowWidth } from '../../utils/constants';
import AppColors from '../../theme/colors';

type Props = RouteType<'productSize'>;

const ProductSize: React.FC<Props> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 21, fontWeight: '700', marginBottom: 10 }}>
        Size
      </Text>
    <View style={{flexDirection:"row"}}>
          {product?.size?.map((item, index) => (
        <View
          key={index}
          style={{
            borderWidth: 1,
            width: windowWidth * 0.18,
            height: windowWidth * 0.18,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor:item.isHave?AppColors.BLACK:"#CFCDCD",
            margin:5
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.size}</Text>
        </View>
      ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProductSize;
