import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../src/screens/LoginScreen';
import CadastroOptions from '../src/screens/Cadastro/CadastroOptions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from '../src/screens/OnboardingScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PfScreen from '../src/screens/Cadastro/PfScreen';
import PjScreen from '../src/screens/Cadastro/PjScreen';

const Drawer = createDrawerNavigator();
const AuthDrawer = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <>
      <Drawer.Navigator initialRouteName={routeName}>
        <Drawer.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ header: () => null }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Drawer.Screen
          name="Signup"
          component={CadastroOptions}
          options={({ navigation }) => ({
            title: '',
            headerLeft: () => (
              <View style={styles.conta}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  color="#ff1493"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
        <Drawer.Screen
          name="PfScreen"
          component={PfScreen}
          options={({ navigation }) => ({
            title: '',
          })}
        />
        <Drawer.Screen
          name="PjScreen"
          component={PjScreen}
          options={({ navigation }) => ({
            title: '',
          })}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AuthDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
