import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { RouteType } from '../routes/RouteType';
import WidgetHeader from './widgetHeader';
import ProductItem from '../products/productItem';
import Input from '../ui/input';
import AppColors from '../../theme/colors';
import { SearchNormal } from 'iconsax-react-nativejs';

type Props = RouteType<'widget'>;

const Widget: React.FC<Props> = ({ title, data, widget }) => {
  if (widget.type == 'searchBar')
    return (
      <View style={{marginTop:15}}>
        <Input icon={<SearchNormal size={28}/>} placeholder='Arama yapınız'/>
      </View>
    );
  else if (widget.type == 'promotion')
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center',marginVertical:30 }}>
        <View
          style={{
            backgroundColor: AppColors.PRIMARY,
            width: '90%',
            height: 165,
            borderRadius: 20,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}
          >
            <Text
              style={{
                color: AppColors.WHITE,
                fontSize: 21,
                fontWeight: '700',
              }}
            >
              Çocuklar için %20 Yaz İndiriminden Yararlanın
            </Text>
          </View>
          <View style={{ flex: 1 ,justifyContent:"center",alignItems:"center"}}>
        <Image
        source={require("../../assets/images/image1.png")}
        style={{width:130,
            height:145,
            resizeMode:"contain"
        }}
        />
          </View>
        </View>
      </View>
    );
  else if (widget.type == 'list')
    return (
      <View style={styles.container}>
        <WidgetHeader title={title} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {},
});

export default Widget;
