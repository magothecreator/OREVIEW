import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.logout}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDrawer}
          onPress={() => navigation.openDrawer()}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Bem vindo</Text>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 18,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    width: '18%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF',
  },
  logout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonDrawer: {
    backgroundColor: 'blue',
  },
});
