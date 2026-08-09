//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ProductItem from '../../components/products/productItem';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import { windowHeight } from '../../utils/constants';
import { Heart, HeartEdit } from 'iconsax-react-nativejs';
import Button from '../../components/ui/button';
import AppRoutes from '../../utils/routes';
import AppColors from '../../theme/colors';
import UserCheck from '../../components/ui/userCheck';

// create a component
const Favorites: React.FC = ({ navigation }) => {
  const { favorites } = useSelector((state: RootState) => state.favorites)
  const { isLogin } = useSelector((state: RootState) => state.auth)
  if (isLogin)
    return (
      <View style={defaultScreenStyle.container}>
        <FlatList
          ListEmptyComponent={<View style={{
            justifyContent: "center",
            height: windowHeight * 0.5
          }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
              <Heart size={100} color={AppColors.RED} variant="Bold" />
              <Text style={{ fontSize: 18, fontWeight: "500", color: AppColors.GRAY, marginVertical: 10 }}>Henüz favorilere ürün eklenmedi</Text>
            </View>
            <Button
              onPress={() => navigation.navigate(AppRoutes.PRODUCTLIST)}
              type="fullFiled" title="Ürünlere Göz At" />
          </View>}
          numColumns={2}
          data={favorites}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </View>
    )
  else
    return (
  <UserCheck description="Favorileri görüntülemek için lütfen giriş yapın.Hesabınız yoksa hemen bir hesap oluşturun." />)
};      

// define your styles
const styles = StyleSheet.create({
  container: {

  },
});

//make this component available to the app
export default Favorites;
