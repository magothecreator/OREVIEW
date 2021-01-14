import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo ao Oficina Review</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text>Começar agora</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696969',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#00ced1',
    padding: 10,
    marginTop: 40,
  },
});
