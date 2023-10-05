import React, { useState } from "react"
import {
  View, Text, Image, StatusBar
} from 'react-native'
import { Input } from 'react-native-elements';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import { Toast } from 'teaset'
import { validatePhone } from '../../../utils/validator'
import GradientButton from '../../../components/gradient-button'
import request from "../../../utils/request";
import { ACCOUNT_LOGIN } from '../../../utils/path-map'
import styles from './style'

function Login(props) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneValid, setPhoneValid] = useState(true)
  const [showLogin, setShowLogin] = useState(true)
  const [vcode, setVcode] = useState('')
  const [isCountDowning, setIsCountDowning] = useState(false)
  const [btnText, setBtnText] = useState('重新获取')

  // 完成输入
  const phoneNumberSubmit = () => {
    if (!validatePhone(phoneNumber)) {
      setPhoneValid(false)
      return
    }
    setPhoneValid(true)
  }

  // 重新获取验证码
  const repGetVcode = () => {
    if (isCountDowning) {
      return false
    }
    let seconds = 5
    setBtnText(`重新获取（${seconds}s）`)
    setIsCountDowning(true)
    let timer = setInterval(() => {
      seconds--
      setBtnText(`重新获取（${seconds}s）`)
      if (seconds === 0) {
        clearInterval(timer)
        setBtnText(`重新获取`)
        setIsCountDowning(false)
      }
    }, 1000)
  }

  // 获取验证码
  const getVCode = async () => {
    if (!validatePhone(phoneNumber)) {
      setPhoneValid(false)
      return
    }
    setPhoneValid(true)

    const res = await request.post(ACCOUNT_LOGIN, { phone: phoneNumber });
    if (res.status === 200) {
      setShowLogin(false)
    } else {
      Toast.message('Toast message', 3000);
    }
    repGetVcode()
  }

  // 验证码输入完成
  const onVcodeSunmit = () => {
    // 验证码校验
    if (vcode.length !== 6) {
      return Toast.message('验证码格式不正确', 2000, 'center');
    }
    props.navigation.navigate('UserInfo')
  }



  const RenderLogin = () => {
    return (
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>手机号登陆注册</Text>
        <Input
          leftIcon={{ type: 'font-awesome', name: 'phone', color: '#ccc' }}
          placeholder='请输入手机号码'
          value={phoneNumber}
          keyboardType="phone-pad"
          maxLength={11}
          inputStyle={{ color: '#333' }}
          onChangeText={setPhoneNumber}
          errorMessage={phoneValid ? "" : "手机号码格式不正确"}
          onSubmitEditing={phoneNumberSubmit}
        />
        <View>
          <GradientButton onPress={getVCode} style={{ width: '85%' }}>获取验证码</GradientButton>
        </View>
      </View>
    )
  }

  const RenderVcode = () => {
    return (
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>输入6位验证码</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>发送到 +86 {phoneNumber}</Text>
        <CodeField
          value={vcode}
          onChangeText={setVcode}
          cellCount={6}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
          onSubmitEditing={onVcodeSunmit}
        />
        <View>
          <GradientButton disabled={isCountDowning} onPress={repGetVcode} style={{ width: '85%', marginTop: 30 }}>{btnText}</GradientButton>
        </View>
      </View>
    )
  }

  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
      <Image style={{ width: '100%', height: 200 }} source={require('../../../assets/profileBackground.jpg')}></Image>
      {showLogin ? RenderLogin() : RenderVcode()}
    </View >
  )
}



export default Login