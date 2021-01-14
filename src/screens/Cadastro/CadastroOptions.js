import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';

const CadastroOptions = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PfScreen')}>
          <Text style={styles.buttonText}>Pessoa Física</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PjScreen')}>
          <Text style={styles.buttonText}>Pessoa Jurídica</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CadastroOptions;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b0c4de',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 45,
    marginBottom: 10,
    marginTop: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
