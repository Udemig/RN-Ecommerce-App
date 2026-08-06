import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteType } from '../routes/RouteType'

type Props = RouteType<'productDesciption'>

const ProductDesciption: React.FC<Props> = ({ product }) => {
    return (
        <View style={styles.container}>
                <Text style={{ fontSize: 21, fontWeight: '700',marginBottom:10 }}>Description</Text>
            <Text style={{ fontSize: 18,color:"#9B9999" }}>{product?.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:20
    },
})

export default ProductDesciption
