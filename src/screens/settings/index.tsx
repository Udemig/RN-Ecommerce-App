import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {}

const Settings: React.FC<Props> = props => (
    <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> Settings </Text>
    </View>
)

Settings.defaultProps = {}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default Settings
