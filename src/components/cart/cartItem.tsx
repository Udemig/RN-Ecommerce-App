import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteType } from '../routes/RouteType';
import { CartItemProps } from '../../model/ui/cartItemProps';
import { windowWidth } from '../../utils/constants';
import { Trash } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';
import Counting from '../ui/counting';
import AppRoutes from '../../utils/routes';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { deleteToCart } from '../../store/slice/cartSlice';

type Props = RouteType<'CartItem'>;

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const navigation=useNavigation()
  const dispatch:AppDispatch=useDispatch()
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate(AppRoutes.PRODUCTDETAIL,{product})}
    activeOpacity={0.8} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={()=>dispatch(deleteToCart(product.id))}>
          <Trash color={AppColors.DELETE} variant='Bold'/>
        </TouchableOpacity>
        <Counting product={product}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: AppColors.SOFTGRAY,
    marginVertical: 5,
    padding: 10,
    flex:1
  },
  image: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.25,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  actionContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent:"space-between"
  },
  name:{fontSize:21,fontWeight:"700",marginBottom:10},
  category:{color:AppColors.GRAY,marginBottom:10,
    fontSize:16
  },
  price:{
    color:AppColors.PRIMARY,
      fontSize:16,fontWeight:"600"
  }
});

export default CartItem;
