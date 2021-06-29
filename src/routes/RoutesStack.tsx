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
import Emergency from "../pages/Menu/Emergency";


import RoutesTab from './RoutesTab';
import SelectMap from '../pages/Menu/SelectMap';
import LocateRisk from '../pages/Menu/SecondPage/LocateRisk';
import RiskLocateFloot from '../pages/Menu/SecondPage/RiskLocateFloot';


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
                <Screen name="Emergency" component={Emergency} />
                <Screen name="SelectMap" component={SelectMap} />
                <Screen name="LocateRisk" component={LocateRisk} />
                <Screen name="RiskLocateFloot" component={RiskLocateFloot}/>
            </Navigator>
        </NavigationContainer>
    )
}
