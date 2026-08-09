import React from 'react';
import { Modal, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RouteType } from '../routes/RouteType';
import AppColors from '../../theme/colors';
import { windowHeight, windowWidth } from '../../utils/constants';
import { CloseCircle, LoginCurve, TickCircle } from 'iconsax-react-nativejs';
import Button from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { colseModal } from '../../store/slice/cartSlice';
import { closeModal } from '../../store/slice/authSlice';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';
type Props = RouteType<'UserCheckModal'>;

const UserCheckModal: React.FC<Props> = () => {
  const { visible } = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch()
  const navigation = useNavigation()
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
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 15,

          }}
        >
          <View style={{ padding: 10, justifyContent: "center", alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={() => dispatch(closeModal())}
            >
              <CloseCircle size={30} variant='Bold' />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
              paddingHorizontal: 15

            }}
          >
            <LoginCurve size="100" color="#37d67a" variant="Bold" />
            <Text style={{ fontSize: 16, marginTop: 15, textAlign: "center" }}>
              Bu işlemi yapmak için giriş yapmanız gerekir.
            </Text>
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Button
              onPress={() => {
                dispatch(closeModal());
                navigation.navigate(AppRoutes.LOGIN)
              }}
              title="Giriş Yap" type="fullFiled" />
            <Button
              onPress={() => {
                dispatch(closeModal());
                navigation.navigate(AppRoutes.REGISTER)
              }}
              title="Kayıt Ol" type="linear" color={AppColors.GRAY} />
          </View>

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

export default UserCheckModal;
