import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { RouteType } from '../routes/RouteType';
import { windowHeight, windowWidth } from '../../utils/constants';
import { ArrowLeft, Heart, ShoppingCart } from 'iconsax-react-nativejs';
import ProductInfo from '../../components/products/productInfo';
import ProductDesciption from '../../components/products/productDesciption';
import ProductSize from '../../components/products/productSize';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import AppColors from '../../theme/colors';
import Button from '../../components/ui/button';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';

type Props = RouteType<'productDetail'>;

const ProductDetail: React.FC<Props> = ({ navigation, route }) => {
  const dispatch:AppDispatch=useDispatch()
  const { product } = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          top: windowHeight * 0.08,
          width: windowWidth,
          paddingHorizontal: 15,
          zIndex: 99,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.buttonContainer}
        >
          <ArrowLeft />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Heart variant="Bold" color="#7C7979" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: windowHeight * 0.1 }}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
          <ProductInfo product={product} />
          <ProductDesciption product={product} />
          <ProductSize product={product} />
        </View>
      </ScrollView>
      <View
        style={{ backgroundColor: AppColors.WHITE, height: windowHeight * 0.13,flexDirection:"row" }}
      >
        <View style={{ flex: 2,padding:10,justifyContent:"center" }}>
          <Button type="fullFiled" title="Buy Now"/>
        </View>
        <View style={{ flex: 1,padding:10,justifyContent:"center"}}>
          <Button
          onPress={()=>dispatch(addToCart(product))}
          icon={
            <ShoppingCart size={30} variant='Bold' color={AppColors.GRAY}/>
          } type="icon"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.6,
    resizeMode: 'cover',
  },
  buttonContainer: {
    backgroundColor: '#D3D0D0',
    padding: 15,
    borderRadius: 100,
  },
});

export default ProductDetail;
