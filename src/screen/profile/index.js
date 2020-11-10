import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";
import { dispatchLogout } from '../../redux/action/app'
import styles from './style'

const ProfileScreen = (props) => {
    const { processLogout, app } = props
    const { email, fullName, id, isVerified, role, title } = app.login.data
    return (
        <View style={styles.containerProfile}>
            <Text>ID: {id}</Text>
            <Text>Name: {`${title} ${fullName}`}</Text>
            <Text>Email: {email}</Text>
            <Text>is Verified: {isVerified ? 'true' : 'false'}</Text>
            <Text>Role: {role}</Text>
            <Button
                onPress={() => processLogout()}
                title="Logout"
                color="red"
            />
        </View>
    );
}


const mapStoreToProps = (state) => ({
    app: state.app,
});


const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: (payload, callback) => dispatch(dispatchLogout(payload, callback))
    };
};


export default connect(mapStoreToProps, mapDispatchToProps)(ProfileScreen);