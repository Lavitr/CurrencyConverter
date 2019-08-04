import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import List from '../screens/ChosenCurrencies';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
  List: {
    screen: List,
    navigationOptions: {
      header: () => null,
    },
  },
}, {
  mode: 'modal',
  cardStyle: { paddingTop: StatusBar.currentHeight },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
