import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from "react-redux";
import HomeScreen from './screen/home';
import ProfileScreen from './screen/profile';
import LoginScreen from './screen/auth/login';
import RegisterScreen from './screen/auth/register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = (props) => {
    const { app } = props
    return (
        <NavigationContainer>
            {app.is_login ?
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={ProfileScreen} />
                </Tab.Navigator>
                :
                <Stack.Navigator headerMode="none" initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </Stack.Navigator>

            }
        </NavigationContainer>
    );
}

const mapStoreToProps = (state) => ({
    app: state.app,
});

export default connect(mapStoreToProps, null)(App);
