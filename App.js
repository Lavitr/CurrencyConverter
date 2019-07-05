import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';

export default function App() {
  onPressLearnMore=()=>{
    Alert.alert('yes');
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.jKKKK!</Text>
      <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
