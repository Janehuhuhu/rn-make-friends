import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { Input } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { male, female } from '../../../assets/fonts/iconSvg'
import GradientButton from '../../../components/gradient-button'

const UserInfo = () => {
  const [gender, setGender] = useState('male')
  const [nickname, setNickname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [city, setCity] = useState('')


  const selectGender = (v) => {
    console.log('v=====', v)
    setGender('female')
  }

  // 选择头像
  const chooseHeadImg = () => {
    console.log('XUANZE头像')
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ color: '#666', fontSize: 20 }}>填写资料</Text>
      <Text style={{ color: '#666', fontSize: 20 }}>填写我的魅力</Text>
      <View style={{ width: '60%', alignSelf: 'center', marginBottom: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: gender === 'male' ? 'cyan' : '#ddd',
        }}
          onPress={selectGender}
        >
          <SvgUri svgXmlData={female} width={35} height={35}></SvgUri>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: gender === 'female' ? 'cyan' : '#ddd'
        }}>
          <SvgUri svgXmlData={male} width={35} height={35}></SvgUri>
        </TouchableOpacity>
      </View>
      <Input
        placeholder='昵称设置'
        value={nickname}
        inputStyle={{ color: '#333' }}
        onChangeText={setNickname} />
      {/* <DatePicker
        style={{ width: 200 }}
        date={birthday}
        mode="date"
        placeholder="设置生日"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => { setBirthday(date) }}
      /> */}
      <Input
        placeholder='设置生日'
        value={birthday}
        inputStyle={{ color: '#333' }}
        onChangeText={setBirthday} />
      <Input
        placeholder='自动定位：'
        value={nickname}
        inputStyle={{ color: '#333' }}
        onChangeText={setCity} />
      <GradientButton onPress={chooseHeadImg} style={{ width: '85%' }}>设置头像</GradientButton>
    </View>
  )
}

export default UserInfo;
