import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import GoogleIcon from '../../assets/svg/Google';
import RightArrow from '../../assets/svg/RightArrow';
import { theme } from '../../assets/theme/theme';

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skipView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.wrapper}>
          <Text>
            <RightArrow />
          </Text>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.googleButton}>
          <Text>
            <GoogleIcon />
          </Text>
          <Text style={styles.googleText}> Continue with google</Text>
        </TouchableOpacity>
        <View>
          <Text>Continue with email</Text>
          <TextInput
            placeholder='example@email.com'
            style={styles.textInput}
            placeholderTextColor={theme.gray}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    paddingVertical: '20%',
    paddingHorizontal: 15,
    paddingBottom: '35%',
  },
  googleButton: {
    width: '100%',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: theme.red,
    marginBottom: 16,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    paddingLeft: 10,
    fontSize: 12,
  },
  skipView: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  skipText: {
    lineHeight: 15,
    color: theme.gray,
    fontWeight: 'bold',
    paddingVertical: 1,
    paddingHorizontal: 6,
    fontSize: 12,
  },
  textInput: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: theme.offWhite,
    color: theme.gray,
    borderWidth: 1,
    borderColor: theme.offWhite,
  },
  wrapper: {
    width: 50,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default SignIn;
