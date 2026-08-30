import React,{useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { RouteType } from '../routes/RouteType';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import ProductItem from '../../components/products/productItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getAllProducts } from '../../store/actions/productsActions';

type Props = RouteType<'productsList'>;

const ProductsList: React.FC<Props> = ({ navigation, route }) => {
    const {productList}=useSelector((state:RootState)=>state.products)
    const dispatch:AppDispatch=useDispatch()
useEffect(() => {
  dispatch(getAllProducts({}))
}, [])

  return (
    <View style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
        showsVerticalScrollIndicator={false}
          numColumns={2}
          data={productList}
          renderItem={({ item }) => <ProductItem product={item} type="list"/>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProductsList;
