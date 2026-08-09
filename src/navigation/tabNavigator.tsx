import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import AppRoutes from '../utils/routes';
import Search from '../screens/products/search';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import TabBarIcon from '../components/navigation/tabBarIcon';
import AppColors from '../theme/colors';
import HomeHeader from '../components/navigation/homeHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Favorites from '../screens/favorites';

const TabNavigator: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart)
  const cartProducts = cart.length
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon
            focused={focused}
            name={route.name}
            color={color}
            size={size}
          />
        ),
        tabBarShowLabel: false,
        tabBarItemStyle: { justifyContent: "center", alignItems: "center", marginHorizontal: 1, marginTop: 10 },
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY
      })}
    >
      <Tab.Screen options={{
        header: () => <HomeHeader />
      }} name={AppRoutes.HOME} component={Home} />
      <Tab.Screen name={AppRoutes.FAVORITE} component={Favorites} />
      <Tab.Screen
        options={{
          tabBarBadge: cartProducts,
        
          tabBarBadgeStyle:{
            backgroundColor:AppColors.DELETE,
            color:AppColors.WHITE,
           top:-8,
          },
        
        }}
        name={AppRoutes.CART} component={Cart} />
      <Tab.Screen name={AppRoutes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
