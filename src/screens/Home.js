import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { theme } from '../../assets/theme/theme';
import DisplayReminder from '../components/DisplayReminder';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <DisplayReminder />
      </View>
      <TouchableHighlight style={styles.addButton}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 40,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: theme.black,
    elevation: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  },
  list: {
    width: '100%',
  },
  plusSign: {
    color: theme.white,
    fontSize: 20,
  },
});

export default Home;
