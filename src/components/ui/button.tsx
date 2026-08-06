import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { RouteType } from '../routes/RouteType';
import { ShoppingCart } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';

type Props = RouteType<'button'>;

const Button: React.FC<Props> = (props) => {
const { type, title, icon,color }=props
  if (type == 'fullFiled')
    return (
      <TouchableOpacity {...props} style={[styles.fullFiledContainer,{backgroundColor:color?color:AppColors.PRIMARY}]}>
        <Text
          style={{ fontSize: 21, color: AppColors.WHITE, fontWeight: '700' }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  else if (type == 'icon')
    return (
      <TouchableOpacity  {...props} style={styles.iconButtonContainer}>
        {icon}
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  fullFiledContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingVertical: 15,
  },
  iconButtonContainer: {
    backgroundColor: AppColors.SOFTGRAY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColors.GRAY,
  },
});

export default Button;
