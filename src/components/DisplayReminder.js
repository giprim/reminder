import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PauseIcon from '../../assets/svg/PauseIcon';
import { theme } from '../../assets/theme/theme';

const DisplayReminder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.time}>09:55</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.smText}>Reminder to</Text>
        <Text style={styles.mdText}>Stand up and stretch</Text>
      </View>
      <View style={styles.action}>
        <Text>
          <PauseIcon />
        </Text>
      </View>
    </View>
  );
};

export default DisplayReminder;

const styles = StyleSheet.create({
  action: {
    alignSelf: 'flex-end',
    height: '100%',
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 55,
    backgroundColor: theme.offWhite,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  detail: {
    display: 'flex',
    flexGrow: 1,
    paddingLeft: 16,
    paddingTop: 8,
  },
  mdText: {
    fontSize: 16,
  },
  smText: {
    fontSize: 12,
  },
  time: {
    fontSize: 25,
    color: theme.white,
  },
  timer: {
    height: '100%',
    backgroundColor: theme.gray,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
