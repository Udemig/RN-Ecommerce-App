import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { RouteType } from '../routes/RouteType';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import ProductItem from '../../components/products/productItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = RouteType<'productsList'>;

const ProductsList: React.FC<Props> = ({ navigation, route }) => {
    const {productList}=useSelector((state:RootState)=>state.products)
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
        showsVerticalScrollIndicator={false}
          numColumns={2}
          data={productList}
          renderItem={({ item }) => <ProductItem product={item} type="list"/>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProductsList;
