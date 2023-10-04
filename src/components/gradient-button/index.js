import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

const componentName = ({
  style,
  onPress,
  children,
  disabled
}) => (
  <View>
    <TouchableOpacity disabled={disabled} onPress={onPress} style={{ ...style, ...styles.container }}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9b63cd', '#e0708c']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>

  </View>
);

export default componentName;
