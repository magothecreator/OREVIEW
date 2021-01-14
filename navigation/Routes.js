import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthDrawer from './AuthDrawer';
import AppDrawer from './AppDrawer';
import { AuthContext } from './AuthProvider';
import {} from 'react-native-gesture-handler';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    };

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [initializing, setUser]);

  if (initializing) {
    return null;
  }
  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <AuthDrawer />}
    </NavigationContainer>
  );
};

export default Routes;
