import React from 'react';
import { Modal, Text, StyleSheet, View } from 'react-native';
import { RouteType } from '../routes/RouteType';
import AppColors from '../../theme/colors';
import { windowHeight, windowWidth } from '../../utils/constants';
import { TickCircle } from 'iconsax-react-nativejs';
import Button from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { colseModal } from '../../store/slice/cartSlice';

type Props = RouteType<'AddedToCartModal'>;

const AddedToCartModal: React.FC<Props> = ({ navigation, route }) => {
    const {visible}=useSelector((state:RootState)=>state.cart)
    const dispatch:AppDispatch=useDispatch()
  return (
    <Modal
      animationType="fade"
      statusBarTranslucent
      style={styles.container}
      visible={visible}
      transparent
    >
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          backgroundColor: 'rgba(0,0,0,0.35)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: AppColors.WHITE,
            width: windowWidth * 0.85,
            height: windowHeight * 0.4,
            borderRadius: 10,
            justifyContent: 'center',
            padding: 15,
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}
          >
            <TickCircle size="100" color="#37d67a" variant="Bold" />
            <Text style={{ fontSize: 16, marginTop: 15 }}>
              Ürün başarılı bir sekilde sepete eklendi
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title="Sepete Git" type="fullFiled" />
          </View>
          <Button
          onPress={()=>dispatch(colseModal())}
          title="Devam Et" type="fullFiled" color={AppColors.GRAY} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AddedToCartModal;
