import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'cadetblue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});


const SubmitButton = ({ onPress }) => (
  <TouchableOpacity
    style={styles.loginScreenButton}
    onPress={onPress}
    underlayColor="#fff"
  >
    <Text style={styles.loginText}>Finish selection</Text>
  </TouchableOpacity>
);

export default SubmitButton;
