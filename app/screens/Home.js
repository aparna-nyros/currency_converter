import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { swapCurrency, changeCurrencyAmount, getIntialConversion } from '../actions/currencies';
import SplashScreen from 'react-native-splash-screen';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'INR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '6856.00';
//const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 68.56;

class Home extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
  };
  // componentDidMount() {
  //   SplashScreen.hide()
  // }
  componentWillMount() {
//getIntialConversion function will be called from currencies.js file in actions.
    this.props.dispatch(getIntialConversion());
  }

  handleChangeText = (amount) => {
   this.props.dispatch(changeCurrencyAmount(amount));
  };

  handlePressBaseCurrency = (primaryColor) => {
  
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' , backgroundColor: primaryColor});
  };

  handlePressQuoteCurrency = (primaryColor) => {
    console.log('press quote currency');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote', backgroundColor: primaryColor});

  };

  // handleSwapCurrency = () => {
  //   console.log('handle swap currency');
  // };

  handleSwapCurrency = () => {
   // console.log('handle swap currency');
   this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = (primaryColor) => {
    console.log('options press');
   this.props.navigation.navigate('Options', { title: 'Options', backgroundColor: primaryColor  });
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if(this.props.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar backgroundColor={this.props.primaryColor} barStyle="light-content" />
        <Header onPress={() => this.handleOptionsPress(this.props.primaryColor)} />
   
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText= {this.props.baseCurrency}
            onPress={() => this.handlePressBaseCurrency(this.props.primaryColor)}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            editable={false}
            buttonText={this.props.quoteCurrency}
            onPress={() => this.handlePressQuoteCurrency(this.props.primaryColor)}
            value={quotePrice}
            textColor={this.props.primaryColor}

          />
          <LastConverted
           
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
       
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
   const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
  
    return {
      baseCurrency,
      quoteCurrency,
     amount: state.currencies.amount,
     conversionRate: rates[quoteCurrency] || 0,
    // lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
     isFetching: conversionSelector.isFetching,
     primaryColor: state.theme.primaryColor,
   };
  };

  export default connect(mapStateToProps)(Home);
