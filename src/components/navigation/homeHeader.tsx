import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';
import { RouteType } from '../routes/RouteType';
import { Notification } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';

type Props = RouteType<'homeHeader'>;

const HomeHeader: React.FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"row",padding:10,justifyContent:"center"}}>
        <View style={{flex:2,flexDirection:"row"}}>
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
            }}>Ahmet Kara</Text>
          </View>
        </View>
        <View style={{flex:1,alignItems:"flex-end",justifyContent:"center"}}>
            <View style={{backgroundColor:"#F8F7F7",justifyContent:"center",alignItems:"center",padding:10,borderRadius:100}}>
            <Notification size={30} variant='Bold' color='#7C7979'/>

            </View>
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
