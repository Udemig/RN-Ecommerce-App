import React from 'react';
import AppRoutes from '../../utils/routes';
import { Home2 ,SearchNormal,ShoppingCart,Profile, Heart} from 'iconsax-react-nativejs';


const TabBarIcon: React.FC<Props> = ({ focused, name, color, size }) => {
  switch (name) {
    case AppRoutes.HOME:
      return <Home2 size={30} color={color} variant={"Bold"}/>;
          case AppRoutes.FAVORITE:
      return <Heart size={30} color={color} variant={"Bold"} />;
          case AppRoutes.CART:
      return <ShoppingCart size={30} color={color} variant={"Bold"} />;
          case AppRoutes.PROFILE:
      return <Profile size={30} color={color} variant={"Bold"} />;
  }
};

export default TabBarIcon;
