import React from 'react';
import { Pressable, Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppColors from '../../theme/colors';
import { Add, Heart } from 'iconsax-react-nativejs';
import { windowHeight, windowWidth } from '../../utils/constants';
import AppRoutes from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { addToCart } from '../../store/slice/cartSlice';
import { addToFavorite } from '../../store/slice/favoriteSlice';
import { openModal } from '../../store/slice/authSlice';
import { ProductItemProps } from '../../model/ui/productItemProps';

const ProductItem: React.FC<ProductItemProps> = ({ product, type }) => {
  const navigation = useNavigation();
  const { favorites } = useSelector((state: RootState) => state.favorites)
  const { isLogin } = useSelector((state: RootState) => state.auth)
  const isFavorite = favorites.find((item) => item.id == product.id)
  const dispatch: AppDispatch = useDispatch()
    const handleAddToFavorites = () => {
      if (isLogin)
        dispatch(addToFavorite(product))
      else
        dispatch(openModal())
    }
  return (
    <Pressable
      onPress={() => navigation.navigate(AppRoutes.PRODUCTDETAIL, {productId:product.id })}
      style={styles.container}
    >
      <TouchableOpacity 
      onPress={handleAddToFavorites}
      style={{ position: 'absolute', right: 5, top: 5, zIndex: 99 }}>
        <Heart color={isFavorite ? AppColors.RED : AppColors.GRAY} size={30} variant="Bold" />
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: product?.images[0]}} />
      <View style={{ padding: 10}}>
        <View >
          <Text  style={styles.title} numberOfLines={2}>
            {product.title}
          </Text>
        </View>
        {type == "list" && 
        <View style={{flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center"
        }}>
          <Text style={styles.price}>${product.price}</Text>
          <TouchableOpacity
            onPress={() => dispatch(addToCart(product))}
            style={{
              backgroundColor: AppColors.PRIMARY,
              borderRadius: 100,
              padding: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Add color='white' size={30} />
          </TouchableOpacity>
        </View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2-20,
    backgroundColor: '#F8F7F7',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
  },
  image: {
    width: windowWidth / 2-20,
    height: windowHeight * 0.2,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    color: AppColors.BLACK,
    fontWeight: '700',
    marginVertical: 10,
    fontSize: 14,
  },
  price: {
    color: AppColors.PRIMARY,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ProductItem;
