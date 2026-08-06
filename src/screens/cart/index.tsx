import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import CartItem from '../../components/cart/cartItem';
import OrderSummary from '../../components/cart/orderSummary';
import Button from '../../components/ui/button';
import { CardTick, ChartCircle, ShoppingCart } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';
import { windowHeight } from '../../utils/constants';
import AppRoutes from '../../utils/routes';

interface Props {}

const Cart: React.FC<Props> = ({navigation,route}) => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const cartProduct=cart?.length

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
      ListEmptyComponent={<View style={{justifyContent:"center",
        height:windowHeight*0.5
      }}>
      <View style={{justifyContent:"center",alignItems:"center",marginBottom:50}}>
          <ShoppingCart size={100} color={AppColors.PRIMARY} variant="TwoTone"/>
        <Text style={{fontSize:18,fontWeight:"500",color:AppColors.GRAY,marginVertical:10}}>Henüz sepete ürün eklenmedi</Text>
      </View>
        <Button
        onPress={()=>navigation.navigate(AppRoutes.PRODUCTLIST)}
        type="fullFiled" title="Ürünlere Göz At"/>
      </View>}
        data={cart}
        renderItem={({ item }) => <CartItem product={item} />}
        ListFooterComponent={<OrderSummary/>}
      />
    {
      cartProduct!==0&&  <View>
        <Button type="fullFiled" title="Check Out"/>
      </View>
    }
    </View>
  );
};

Cart.defaultProps = {};

const styles = StyleSheet.create({
  container: {},
});

export default Cart;
