import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteType } from '../routes/RouteType';
import AppColors from '../../theme/colors';
import { Star, Star1 } from 'iconsax-react-nativejs';

type Props = RouteType<'prıductInfo'>;

const ProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 21, fontWeight: '700' }}>{product?.title}</Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
        >
          <Star1 variant="Bold" color="#FFC107" />
          <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 10 }}>
            4.5 ( 20 Review)
          </Text>
        </View>
      </View>
      <View style={{ flex: 1,justifyContent:"flex-end",alignItems:"flex-end" }}>
        <Text
          style={{ fontSize: 21, fontWeight: '700', color: AppColors.PRIMARY }}
        >
          ${product?.price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProductInfo;
