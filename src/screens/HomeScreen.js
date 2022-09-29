import { Text, SafeAreaView, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation }  from "@react-navigation/native"

import { 
    ChevronDownIcon
 } from "react-native-heroicons/outline"

const HomeScreen = ({ route }) => {
    const navigation = useNavigation()

    console.log(navigation)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
    <SafeAreaView className="bg-blue-500">
        <View>
            <Text className="font-bold text-xl">
                { route.params.name }
                <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
        </View>
    </SafeAreaView>
    )
}

export default HomeScreen
