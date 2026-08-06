import React from 'react';
import RootNavigator from './src/navigation/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AddedToCartModal from './src/components/modals/addedToCartModal';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
        <AddedToCartModal />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
