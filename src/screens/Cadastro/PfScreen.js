import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { AuthContext } from '../../../navigation/AuthProvider';
//import firebase from 'firebase';
import firebase from '../../../Database/firebase';
//import 'firebase/firestore';

function PfScreen({ navigation }) {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setUserName] = useState();
  const [cpf, setUserCpf] = useState();
  const [birth, setUserBirth] = useState();
  const [email, setEmail] = useState();
  // const [listFire, setListFire] = useState();

  const { register } = useContext(AuthContext);

  function pushFire() {
    try {
      firebase.database().ref('/OficinaReview').push({
        nome: name,
        idade: birth,
        cpf: cpf,
        email: email,
        senha: password,
      });
    } catch (error) {
      alert(error);
    } finally {
      setUserName('');
      setUserBirth('');
      setUserCpf('');
      setEmail('');
      setPassword('');
    }
    alert('Usuário cadastrado');
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Dados pessoais</Text>
        <TextInput
          style={styles.input}
          labelValue={name}
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(userName) => setUserName(userName)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          labelValue={cpf}
          placeholder="CPF"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(userCpf) => setUserCpf(userCpf)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          labelValue={birth}
          placeholder="Data de Nascimento"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(userBirth) => setUserBirth(userBirth)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          labelValue={email}
          placeholder="Email"
          iconType="user"
          onChangeText={(userEmail) => setEmail(userEmail)}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          labelValue={password}
          placeholder="Senha"
          iconType="lock"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <TextInput
          style={styles.input}
          labelValue={confirmPassword}
          onChangeText={(userPassword) => setConfirmPassword(userPassword)}
          placeholder="Confirmar a senha"
          iconType="lock"
          secureTextEntry={true}
          autoCorrect={false}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={(() => register(email, password), pushFire)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>
            Já possui uma conta? Faça o Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default PfScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b0c4de',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  button: {
    backgroundColor: '#708090',
    width: '74%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    alignItems: 'center',
  },
  header: {
    color: '#000000',
    fontSize: 20,
    height: 30,
    paddingRight: 175,
  },
  viewbttn: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

// const [state, setState] = useState({
//   name: '',
//   email: '',
//   password: '',
//   cpf: '',
//   age: '',
// });
// const handleChangeText = (name, value) => {
//   setState({ ...state, [name]: value });
// };

// const SaveNewUser = async () => {
//   if (state.name === '') {
//     alert('Por favor digite um nome');
//   } else {
//     await firebase.firestore().collection('users').add({
//       name: state.name,
//       email: state.email,
//       password: state.password,
//       cpf: state.cpf,
//       age: state.age,
//     });
//     alert('Usuário cadastrado');
//   }
// };
// useEffect(() => {
//   try {
//     firebase.database.ref('/OficinaReview').on('value', (snapshot) => {
//       const list = [];
//       snapshot.forEach((childItem) => {
//         list.push({
//           key: childItem.key,
//           nome: childItem.val().nome,
//           idade: childItem.val().idade,
//           cpf: childItem.val().cpf,
//           email: childItem.val().email,
//           senha: childItem.val().senha,
//         });
//       });
//       setListFire(list);
//     });
//   } catch (error) {
//     alert(error);
//   }
// }, []);

// function delFire(key) {
//   firebase
//     .database()
//     .ref('/OficinaReview' + key)
//     .remove();
// }

// function editFire(key, nome, idade, cpf, email, senha) {
//   navigation.navigate('Edit', {
//     key: key,
//     nome: nome,
//     idade: idade,
//     cpf: cpf,
//     email: email,
//     senha: senha,
//   });
// }
/* <FlatList
          style={styles.viewFlatlist}
          data={listFire}
          keyExtractior={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.iconFlat}>
              <Text style={styles.text}> Nome: {item.nome} </Text>
              <Text style={styles.text}> Idade: {item.idade} </Text>
              <Text style={styles.text}> Cpf: {item.cpf} </Text>
              <Text style={styles.text}> Email: {item.email} </Text>
              <Text style={styles.text}> Senha: {item.senha} </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  editFire(
                    item.key,
                    item.nome,
                    item.idade,
                    item.cpf,
                    item.email,
                    item.senha,
                  );
                }}>
                <Text style={styles.text}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  delFire(item.key);
                }}>
                <Text style={styles.text}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        /> */
