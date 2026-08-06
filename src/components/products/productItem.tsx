import React from 'react';
import { Pressable, Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppColors from '../../theme/colors';
import { Add, Heart } from 'iconsax-react-nativejs';
import { windowHeight, windowWidth } from '../../utils/constants';
import AppRoutes from '../../utils/routes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addToCart } from '../../store/slice/cartSlice';

const ProductItem: React.FC<Props> = ({ product,type }) => {
  const navigation = useNavigation();
  const dispatch:AppDispatch=useDispatch()
  return (
    <Pressable
      onPress={() => navigation.navigate(AppRoutes.PRODUCTDETAIL,{product})}
      style={styles.container}
    >
      <Pressable style={{ position: 'absolute', right: 5, top: 5, zIndex: 99 }}>
        <Heart color="red" size={30} variant="Bold" />
      </Pressable>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={{ padding: 10, flex: 1,flexDirection:"row",justifyContent:"space-between" ,alignItems:"center"}}>
      <View>
          <Text style={styles.title} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
{   type=="list" &&   <View>
        <TouchableOpacity
        onPress={()=>dispatch(addToCart(product))}
        style={{
          backgroundColor:AppColors.PRIMARY,
          borderRadius:100,
          padding:1,
          justifyContent:"center",
          alignItems:"center"
        }}
        >
          <Add color='white' size={30}/>
        </TouchableOpacity>
      </View>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2 - 20,
    height: windowHeight * 0.3,
    backgroundColor: '#F8F7F7',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
  },
  image: {
    width: windowWidth / 2 - 20,
    height: windowHeight * 0.2,
    resizeMode: 'cover',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  title: {
    color: AppColors.BLACK,
    fontWeight: '700',
    marginVertical: 10,
    fontSize: 16,
  },
  price: {
    color: AppColors.PRIMARY,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ProductItem;
