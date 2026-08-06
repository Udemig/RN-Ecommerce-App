import React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { WidgetHeaderProps } from '../../model/ui/widgetHeaderProps';
import AppColors from '../../theme/colors';
import AppRoutes from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';
const WidgetHeader: React.FC<WidgetHeaderProps> = ({ title }) => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
      onPress={()=>navigation.navigate(AppRoutes.PRODUCTLIST)}
      >
        <Text style={styles.seeAllButton}>Tümünü Gör</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:15,
    paddingHorizontal:15
  },
  title: {
    color: AppColors.BLACK,
    fontSize: 18,
    fontWeight: '600',
  },
  seeAllButton: {
    color: AppColors.PRIMARY,
    fontSize: 16,
  },
});

export default WidgetHeader;
