import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { RouteType } from '../routes/RouteType';
import { Notification, SearchNormal } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = RouteType<'homeHeader'>;

const HomeHeader: React.FC<Props> = ({ navigation, route }) => {
  const {isLogin}=useSelector((state:RootState)=>state.auth)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"row",padding:10,justifyContent:"center"}}>
       {
        isLogin &&  <View style={{flex:2,flexDirection:"row"}}>
          <View>
            <Image
            source={require("../../assets/images/profile.png")}
            style={{
                width:50,
                height:50
            }}
            />
          </View>
          <View style={{marginLeft:10}}>
            <Text style={{fontSize:14,
            }}>Merhaba!</Text>
            <Text style={{fontSize:18,
                fontWeight:"600"
            }}>Mark Adam</Text>
          </View>
        </View>
       }
        <View style={{flex:1,alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}}>
            <TouchableOpacity style={{backgroundColor:"#F8F7F7",justifyContent:"center",alignItems:"center",padding:10,borderRadius:100,marginHorizontal:10}}>
            <Notification size={27}  color='#7C7979'/>

            </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"#F8F7F7",justifyContent:"center",alignItems:"center",padding:10,borderRadius:100}}>
            <SearchNormal size={27}  color='#7C7979'/>

            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:AppColors.WHITE
  },
});

export default HomeHeader;
