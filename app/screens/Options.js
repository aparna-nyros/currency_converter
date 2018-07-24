import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import Icon from 'react-native-ionicons'
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';
import { connect } from 'react-redux';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {

 static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
    primaryColor: PropTypes.string,
  }
  handlePressThemes = (primaryColor) => {
    console.log('press themes');
    this.props.navigation.navigate('Themes', { title: 'Themes', backgroundColor: primaryColor });
  };

  handlePressSite = () => {
    Linking.openURL('http://fixer.io/').catch(() => this.props.alertWithType('error','Sorry!',"Fixer.io can't be opened right now"));
    console.log('press site');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={() => this.handlePressThemes(this.props.primaryColor)}
          customIcon={
            <Icon name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          customIcon={<Icon name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    
 primaryColor: state.theme.primaryColor,
  };

  
 

 
};
export default connect(mapStateToProps)(Options);
