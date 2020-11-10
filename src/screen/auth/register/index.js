import React, { useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid, CheckBox, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { connect } from "react-redux";
import { registerRequest } from '../../../redux/action/app'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    const { app, postRegister, navigation } = props;
    const [data, setData] = useState({
        title: "",
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
    });
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={styles.containerLogin}>
                <Text>Register</Text>
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={title => setData({ ...data, title })}
                    value={data.title}
                    placeholder="Input Title"
                />
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={fullName => setData({ ...data, fullName })}
                    value={data.fullName}
                    placeholder="Input Fullname"
                />
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={email => setData({ ...data, email })}
                    value={data.email}
                    placeholder="Input Email"
                />
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={password => setData({ ...data, password })}
                    value={data.password}
                    placeholder="Input Password"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.inputLogin}
                    onChangeText={confirmPassword => setData({ ...data, confirmPassword })}
                    value={data.confirmPassword}
                    placeholder="Input Confirm password"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.containerBtn}>
                <View style={styles.viewCheckbox}>
                    <Text>Accept Terms</Text>
                    <CheckBox
                        value={data.acceptTerms}
                        onValueChange={(acceptTerms) => setData({ ...data, acceptTerms })}
                    />

                </View>
                <View style={styles.subContainer}>
                    <Button
                        style={styles.btnRegister}
                        onPress={() => {
                            if (!app.register.loading) {
                                postRegister(data, (res) => {
                                    if (res.error) {
                                        ToastAndroid.show(res.error.message || "Something when wrong", ToastAndroid.SHORT);
                                    } else {
                                        ToastAndroid.show(res.message || "Success", ToastAndroid.SHORT);
                                        navigation.goBack();
                                    }
                                })
                            }
                        }}
                        title={app.register.loading ? '...' : 'Register'}
                        color="#4CAF50"
                    />
                    <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.goBack()}>
                        <Text style={styles.textRegister}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const mapStoreToProps = (state) => ({
    app: state.app,
});

const mapDispatchToProps = (dispatch) => {
    return {
        postRegister: (payload, callback) => dispatch(registerRequest(payload, callback))
    };
};


export default connect(mapStoreToProps, mapDispatchToProps)(HomeScreen);