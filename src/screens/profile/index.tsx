import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import defaultScreenStyle from '../../styles/defaulScreenStyle'
import { ProfileMenu, windowHeight, windowWidth } from '../../utils/constants'
import MenuItem from '../../components/profile/menuItem'
import AppColors from '../../theme/colors'
import Button from '../../components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import UserCheck from '../../components/ui/userCheck'
import { openLoOutModal } from '../../store/slice/authSlice'


const Profile: React.FC = ({ navigation, route }) => {
    const { isLogin } = useSelector((state: RootState) => state.auth)
const dispatch:AppDispatch=useDispatch()
    if (isLogin)
        return (
            <View style={defaultScreenStyle.container}>
                <FlatList
                    ListFooterComponent={<View>
                        <Button
                        onPress={()=>dispatch(openLoOutModal())}
                            title="Sign Out"
                            type="outline"
                        />
                    </View>}
                    ListHeaderComponent={<View style={{
                        justifyContent: "center", alignItems: "center",
                        paddingVertical: windowHeight * 0.03
                    }}>
                        <Image
                            source={require("../../assets/images/profile.png")}
                            style={styles.image}
                        />
                        <Text style={styles.name}>Mark Adam</Text>
                        <Text style={styles.email}>Sunny_Koelpin45@hotmail.com</Text>
                    </View>}
                    data={ProfileMenu}
                    renderItem={({ item }) => <MenuItem item={item} />}
                />
            </View>
        )
    else
        return (
            <UserCheck description="Profil bilgilerinizi görüntülemek için lütfen giriş yapınız.Hesabınız yoksa hemen bir hesap oluşturarak devam edebilirsiniz." />)
}


const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
        borderWidth: 1,
        borderRadius: 100

    },
    name: {
        marginVertical: 10,
        color: AppColors.BLACK,
        fontWeight: "700",
        fontSize: 21
    },
    email: {
        color: AppColors.GRAY,
        fontSize: 16
    }
})

export default Profile
