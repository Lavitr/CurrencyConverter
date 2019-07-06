// import React from 'react';
// import {
//   StyleSheet, Text, View, Button, Alert,
// } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// export default function App() {
//   const onPressLearnMore = () => {
//     console.log('WWWW');
//     Alert.alert('yes');
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.from index</Text>
//       <Text>Open up App.from index</Text>
//       <Button
//         onPress={onPressLearnMore}
//         title="Learn More!!!!"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//     </View>
//   );
// }

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
});

export default () => <Home />;
