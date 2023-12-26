import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import defaultStyles from '../constants/Styles'

const Index = () => {
    return (
        <SafeAreaView style={[defaultStyles.safeContainer, defaultStyles.container]}>
            <Text>Index</Text>
        </SafeAreaView>
    )
}

export default Index