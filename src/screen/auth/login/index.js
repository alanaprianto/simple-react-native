import React, { useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import { connect } from "react-redux";
import { loginRequest } from '../../../redux/action/app'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    const { app, postLogin, navigation } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.containerLogin}>
            <Text>Login</Text>
            <TextInput
                style={styles.inputLogin}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder="Input username"
            />
            <TextInput
                style={styles.inputLogin}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="Input Password"
                secureTextEntry={true}
            />
            <Button
                style={styles.btnLogin}
                onPress={() => {
                    if (!app.login.loading) {
                        postLogin({ email: username, password }, (res) => {
                            if (res.error) {
                                ToastAndroid.show(res.error.message || "Something when wrong", ToastAndroid.SHORT);
                            } else {
                                ToastAndroid.show(res.message || "Success", ToastAndroid.SHORT);
                            }
                        })
                    }
                }}
                title={app.login.loading ? '...' : 'Login'}
                color="#841584"
            />
            <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textRegister}>Register here</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStoreToProps = (state) => ({
    app: state.app,
});

const mapDispatchToProps = (dispatch) => {
    return {
        postLogin: (payload, callback) => dispatch(loginRequest(payload, callback))
    };
};


export default connect(mapStoreToProps, mapDispatchToProps)(HomeScreen);