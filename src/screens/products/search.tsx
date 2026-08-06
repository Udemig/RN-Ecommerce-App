import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {}

const Search: React.FC<Props> = props => (
    <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> Search </Text>
    </View>
)

Search.defaultProps = {}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default Search
