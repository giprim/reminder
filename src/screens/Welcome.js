import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Timeglass from '../../assets/svg/Timeglass';
import Wave from '../../assets/svg/Wave';
import { theme } from '../../assets/theme/theme';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Wave />
      </View>
      <View style={styles.box2}>
        <Timeglass />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.label}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  box2: {
    width: '100%',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    backgroundColor: theme.red,
    top: '40%',
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 10,
  },
  label: {
    color: theme.white,
  },
});

export default Welcome;
