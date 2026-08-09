import React from 'react';
import RootNavigator from './src/navigation/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AddedToCartModal from './src/components/modals/addedToCartModal';
import UserCheckModal from './src/components/modals/userCheckModal';
import UserLogOutModal from './src/components/modals/userLogOutModal';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
        <AddedToCartModal />
        <UserCheckModal />
        <UserLogOutModal />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
