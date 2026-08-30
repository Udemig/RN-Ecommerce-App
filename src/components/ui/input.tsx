import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { RouteType } from '../routes/RouteType';
import { SearchNormal } from 'iconsax-react-nativejs';
import AppColors from '../../theme/colors';

type Props = RouteType<'input'>;

const Input: React.FC<Props> = (props) => {
  const {icon,label,error}=props
  return (
   <View>
    {label&& <Text style={styles.label}>{label}</Text>}
     <View style={styles.container}>
     {icon}
      <TextInput  {...props} style={styles.input} />
    </View>
    {error && <Text style={styles.error}>{error}</Text>}
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F7F7',
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    paddingVertical:15,
    paddingLeft:15,
    borderWidth:0.5,
    borderColor:AppColors.GRAY,
  },
  input: {
    backgroundColor: '#F8F7F7',
    fontSize:21,
    marginHorizontal:5,
    flex:1
  },
  label:{
fontSize:16
  },
  error:{
    color:AppColors.DELETE,
      marginVertical:10
  }
});

export default Input;
