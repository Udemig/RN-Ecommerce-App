import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import Widget from '../../components/widgets/widget';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getAllProducts, getBestOfferProducts, getBestSellerProducts, getPopulerProducts } from '../../store/actions/productsActions';

const Home: React.FC<Props> = ({ navigation, route }) => {
  const { productList, bestOfferProducts, bestSellerProducts, populerProducts } = useSelector((state: RootState) => state.products)
  const { homeWidgets } = useSelector((state: RootState) => state.home)
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(getBestSellerProducts({}))
    dispatch(getBestOfferProducts({}))
    dispatch(getPopulerProducts({}))
  }, [])
  const setData = (slug: string) => {
    switch (slug) {
      case "bestOffer": return bestOfferProducts
      case "bestSeller": return bestSellerProducts
      case "populer": return populerProducts
      default: return productList
    }
  }
  return (
    <View style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          data={homeWidgets}
          renderItem={({ item }) =>
            <Widget
              widget={item}
              title={item.title}
              data={setData(item.slug)}
            />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
