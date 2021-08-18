import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text> Sign in </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default SignIn;
