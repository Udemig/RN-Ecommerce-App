import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { RouteType } from '../routes/RouteType';
import { SearchNormal } from 'iconsax-react-nativejs';

type Props = RouteType<'input'>;

const Input: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <SearchNormal size={30} />
      <TextInput style={styles.input} placeholder="Arama yapınız" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F7F7',
    margin: 10,
    borderRadius: 100,
    padding: 10,
    paddingVertical:15,
    paddingLeft:15
  },
  input: {
    backgroundColor: '#F8F7F7',
    fontSize:21,
    marginHorizontal:5,
    flex:1
  },
});

export default Input;
