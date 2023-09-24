import React from "react"
import { View, Text, Image, StatusBar } from 'react-native'
function Login() {
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
      <Image style={{ width: '100%', height: 200 }} source={require('../../../assets/profileBackground.jpg')}></Image>
      <Text>123</Text></View>
  )
}

export default Login