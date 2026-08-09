import React from 'react';
import { Modal, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RouteType } from '../routes/RouteType';
import AppColors from '../../theme/colors';
import { windowHeight, windowWidth } from '../../utils/constants';
import { CloseCircle, LoginCurve, LogoutCurve, TickCircle } from 'iconsax-react-nativejs';
import Button from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { colseModal } from '../../store/slice/cartSlice';
import { closeLogOutModal, closeModal, logOut } from '../../store/slice/authSlice';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';
type Props = RouteType<'UserCheckModal'>;

const UserLogOutModal: React.FC<Props> = () => {
  const { logOutModalVisible } = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <Modal
      animationType="fade"
      statusBarTranslucent
      style={styles.container}
      visible={logOutModalVisible}
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
              onPress={() => dispatch(closeLogOutModal())}
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
            <LogoutCurve size="100" color={AppColors.RED} variant="Bold" />
            <Text style={{ fontSize: 16, marginTop: 15, textAlign: "center" }}>
            Çıkış yapmak istediğine eminmisin?
            </Text>
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Button
                 color={AppColors.RED}
              onPress={() => {
                dispatch(closeLogOutModal());
                dispatch(logOut())
              }}
              title="Çıkış Yap" type="fullFiled" />
            <Button
              onPress={() => {
                dispatch(closeLogOutModal());
              }}
              title="Vazgeç" type="linear" color={AppColors.GRAY} />
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

export default UserLogOutModal;
