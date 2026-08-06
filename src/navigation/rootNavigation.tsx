import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import TabNavigator from './tabNavigator';
import AppRoutes from '../utils/routes';
import ProductsList from '../screens/products/productsList';
import ProductDetail from '../screens/products/productDetail';
import AddedToCartModal from '../components/modals/addedToCartModal';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
      headerBackTitle:"Geri"
    }}
    >
      <Stack.Screen options={{
        headerShown:false
      }} name={AppRoutes.TABMENU} component={TabNavigator} />
      <Stack.Screen name={AppRoutes.PRODUCTLIST} component={ProductsList}/>
      <Stack.Screen
    options={{
    headerShown:false
    }}  
      name={AppRoutes.PRODUCTDETAIL} component={ProductDetail}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
