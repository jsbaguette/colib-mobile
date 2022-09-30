import { 
    SafeAreaView,
    TouchableHighlight, Text, View, TextInput, Image 
} from 'react-native'
import { useNavigation }  from "@react-navigation/native"
import React, { useLayoutEffect, useState } from 'react'
import colors, { colorValues } from '../styles/colors'
import texts from '../styles/texts'
import formsStyle from '../styles/formsStyle'

const LoginScreen = ({ navigation }) => {

    const _navigation = useNavigation()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onPressLogin = () => {
        navigation.navigate('Home', { name: 'Jane' })
    }

    return (
        <SafeAreaView style={{ 
            display: "flex", 
            backgroundColor: colorValues.elements.background,
            alignItems: 'center',
            height: "100%" 
        }}>
            <View>
                <Text style={{
                    ...texts.title,
                    marginTop: 24,
                    marginBottom: 24,
                    textAlign: "center",
                    width: "100%"
                }}>
                    Colib
                </Text>
            </View>
            <View
                style={{ paddingHorizontal: 20, maxWidth: 700, width: "100%" }}
            >
                <View>
                    <TextInput
                        onChangeText={_email => setEmail(_email)}
                        defaultValue={email}
                        placeholder="Email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoFocus={true}
                        keyboardType="email-address"
                        style={{
                            ...formsStyle.regularInputs,
                            marginBottom: 12
                        }}
                    />
                    <TextInput 
                        placeholder="Password"
                        autoCapitalize="none"
                        onChangeText={pass => setPassword(pass)}
                        defaultValue={password}
                        autoComplete="password"
                        secureTextEntry={true}
                        style={{
                            ...formsStyle.regularInputs,
                            marginBottom: 12
                        }}
                    />
                    <TouchableHighlight
                        style={{
                            backgroundColor: colorValues.elements.button,
                            paddingVertical: 16,
                            borderRadius: 12,
                            marginBottom: 12,
                        }}
                        onPress={onPressLogin}
                    >
                        <Text style={{
                            textAlign: "center",
                            color: colorValues.elements.buttonText
                        }}>
                            Login
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 12 }}>
                    <View style={{ 
                        backgroundColor: "black",
                        height: 1,
                        flex: 1,
                        alignSelf: "center"
                    }} />
                    <Text style={{ textAlign: 'center', marginHorizontal: 8}}>Or</Text>
                    <View style={{ 
                        backgroundColor: "black",
                        height: 1,
                        flex: 1,
                        alignSelf: "center"
                    }} />
                </View>
                <View>
                    <TouchableHighlight
                        style={{
                            backgroundColor: colorValues.secondary,
                            paddingVertical: 16,
                            borderRadius: 12,
                            marginBottom: 12,
                        }}
                        onPress={onPressLogin}
                    >
                        <Text style={{
                            textAlign: "center",
                        }}>
                            Login with Google
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen