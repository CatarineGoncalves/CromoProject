import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import FirstPage from './../pages/FirstPage'
import Introduction from './../pages/Introduction';
import Term from './../pages/Term';
import Login from './../pages/Login';
import GuidePalet from './../pages/Menu/SecondPage/GuidePalet';
import StaticHistory from '../pages/Menu/SecondPage/StaticHistory';

import RoutesTab from './RoutesTab';


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="FirstPage">
                <Screen name="FirstPage" component={FirstPage} />
                <Screen name="Introduction" component={Introduction} />
                <Screen name="Term" component={Term} />
                <Screen name="Login" component={Login} />
                <Screen name="RoutesTab" component={RoutesTab} />
                <Screen name="GuidePalet" component={GuidePalet} />
                <Screen name="StaticHistory" component={StaticHistory} />
            </Navigator>
        </NavigationContainer>
    )
}