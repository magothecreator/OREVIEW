/* eslint-disable no-sparse-arrays */
import React, { useState, useEffect } from 'react';

import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';
import Logo from '../../assets/logo.jpg';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 10,
      bounciness: 18,
      useNativeDriver: true,
    }).start();
  });
  return (
    <>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image source={Logo} />
        </View>

        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY: offset.y }],
            },
            ,
          ]}>
          <TextInput
            style={styles.input}
            labelValue={email}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={(userEmail) => setEmail(userEmail)}
          />
          <TextInput
            style={styles.input}
            labelValue={password}
            placeholder="Senha"
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={(userPassword) => setPassword(userPassword)}
          />
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.submitText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.registerText}>
              Não tem uma conta? Crie aqui
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    width: '75%',
    height: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 40,
  },
  input: {
    backgroundColor: '#dcdcdc',
    width: '90%',
    marginBottom: 15,
    color: '#222F',
    fontSize: 17,
    borderRadius: 8,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#4682b4',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#4682b4',
    fontSize: 14,
  },
});
