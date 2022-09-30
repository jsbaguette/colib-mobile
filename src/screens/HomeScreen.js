import { Text, SafeAreaView, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation }  from "@react-navigation/native"

import { 
    ChevronDownIcon
 } from "react-native-heroicons/outline"

const HomeScreen = ({ route }) => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
    <SafeAreaView>
        <View>
            <Text>
                { route.params?.name }
                <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
        </View>
    </SafeAreaView>
    )
}

export default HomeScreen
