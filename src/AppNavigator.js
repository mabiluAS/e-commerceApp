import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './views/Home';

import DetailsSreen from './views/Details';

const AppNavigator = createStackNavigator(
    
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home'}
        },

        Details: {
            screen: DetailsSreen,
            navigationOptions: { title: 'Details' }            
        }
    },

    {
        initialRouteName: "Home"
    }
);

export default AppNavigator;