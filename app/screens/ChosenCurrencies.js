import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { SubmitButton } from '../components/Button';
import currencies from '../data/currencies';
import { deleteCurrnecy, addCurrency } from '../actions/currencies';

class List extends Component {
  handlePress = (currency, isSelected) => {
    const { dispatch } = this.props;
    if (isSelected) {
      dispatch(deleteCurrnecy(currency));
    } else {
      dispatch(addCurrency(currency));
    }
  };

  handlePressButton = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  }

  render() {
    const { selectedCurrency } = this.props;
    console.log('this.props', this.props);
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <SubmitButton style={{ marginBottom: 50 }} onPress={this.handlePressButton} />
        <FlatList
          extraData={selectedCurrency}
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={selectedCurrency.includes(item)}
              onPress={() => this.handlePress(item, selectedCurrency.includes(item))}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  selectedCurrency: state.currencies.choosenCurrencies,
});

export default connect(mapStateToProps)(List);
