import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';

import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
        header: () => null,
        },
    },
    Options: {
        screen: Options,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: navigation.state.params.backgroundColor,
             
            },
            headerTitleStyle: {
                fontFamily: "lato_medium",
                letterSpacing: 0.2,
                fontWeight: '100',
              },
            }),
    },
    Themes: {
        screen: Themes,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: navigation.state.params.backgroundColor,
             
            },
            headerTitleStyle: {
                fontFamily: "lato_medium",
                letterSpacing: 0.2,
                fontWeight: '100',
              },
            }),
    },

},
{
    headerMode: 'screen',
}
);

const CurrencyListStack = StackNavigator({
    // Home: {
    //     screen: Home,
    //     navigationOptions: {
    //     header: () => null,
    //     },
    // },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: navigation.state.params.backgroundColor,
         
        },
        headerTitleStyle: {
            fontFamily: "lato_medium",
            letterSpacing: 0.2,
            fontWeight: '100',
          },
        }),
    },

},
{
    headerMode: 'screen',
}
);



export default StackNavigator({
    Home: {
        screen: HomeStack,
    },
    CurrencyList: {
        screen: CurrencyListStack,
    },

},
{
    mode: 'modal',
   // cardStyle: { paddingTop: StatusBar.currentHeight },
   headerMode: 'none',
   },
);