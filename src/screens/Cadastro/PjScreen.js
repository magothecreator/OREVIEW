import React, { useState } from 'react';
import { useContext } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { AuthContext } from '../../../navigation/AuthProvider';

function PjScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setUserName] = useState();
  const [cnpj, setUserCnpj] = useState();
  const [adress, setUserAdress] = useState();
  const [zipcode, setUserZipCode] = useState();
  const { register } = useContext(AuthContext);
  return (
    <KeyboardAvoidingView style={styles.background}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Dados pessoais</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          labelValue={name}
          autoCorrect={false}
          onChangeText={(userName) => setUserName(userName)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          labelValue={cnpj}
          autoCorrect={false}
          onChangeText={(userCnpj) => setUserCnpj(userCnpj)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          labelValue={email}
          autoCorrect={false}
          onChangeText={(userEmail) => setEmail(userEmail)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          labelValue={password}
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar a senha"
          labelValue={confirmPassword}
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        />

        <Text style={styles.header}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da rua"
          labelValue={adress}
          onChangeText={(userAdress) => setUserAdress(userAdress)}
          autoCorrect={false}
          keyboardType="default"
        />
        <TextInput
          style={styles.cep}
          placeholder="CEP"
          labelValue={zipcode}
          onChangeText={(userCEP) => setUserZipCode(userCEP)}
          autoCorrect={false}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.numero}
          placeholder="Nº"
          onChangeText={() => {}}
          autoCorrect={false}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          onChangeText={() => {}}
          autoCorrect={false}
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => register(email, password)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>
            Já possui uma conta? Faça o Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default PjScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b0c4de',
  },
  container: {
    flex: 1,
    width: '90%',
    paddingBottom: 40,
  },
  input: {
    backgroundColor: '#f0f8ff',
    width: '90%',
    marginBottom: 20,
    color: '#222F',
    fontSize: 17,
    borderRadius: 8,
    padding: 10,
    marginLeft: 18,
  },
  button: {
    backgroundColor: '#708090',
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginLeft: 75,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
  },
  header: {
    color: '#000000',
    fontSize: 20,
    height: 30,
    paddingRight: 10,
    marginLeft: 20,
    marginBottom: 5,
  },
  numero: {
    backgroundColor: '#f0f8ff',
    width: '20%',
    height: 45,
    paddingLeft: 10,
    marginLeft: 265,
    marginBottom: 20,
    marginVertical: -44,
    borderRadius: 10,
  },
  cep: {
    backgroundColor: '#f0f8ff',
    width: '65%',
    height: 45,
    paddingLeft: 10,
    marginLeft: 18,
    borderRadius: 10,
  },
  buttonLogin: {
    backgroundColor: '#708090',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
});
