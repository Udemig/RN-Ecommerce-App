import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import defaultScreenStyle from '../../styles/defaulScreenStyle';
import Widget from '../../components/widgets/widget';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Home: React.FC<Props> = ({ navigation, route }) => {
  const {productList}=useSelector((state:RootState)=>state.products)
  const {homeWidgets}=useSelector((state:RootState)=>state.home)
  return (
    <View style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
        data={homeWidgets}
        renderItem={({item})=><Widget widget={item} title={item.title} data={productList} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
