import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import AppRoutes from '../utils/routes';
import ProductsList from '../screens/products/productsList';
import ProductDetail from '../screens/products/productDetail';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import CheckOut from '../screens/cart/checkOut';

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
      <Stack.Screen name={AppRoutes.LOGIN} component={Login}/>
      <Stack.Screen name={AppRoutes.REGISTER} component={Register}/>
      <Stack.Screen name={AppRoutes.CHECKOUT} component={CheckOut}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
