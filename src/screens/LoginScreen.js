import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    const handleSignInWithPhone = () => {
        navigation.navigate('PhoneInput');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.labelTopLeft}>Odisha Shorts</Text>
            <View style={styles.topSection}>
                <Image
                    source={require('../images/app-logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.bottomSection}>
                <Button
                    title="Sign in with Phone"
                    onPress={handleSignInWithPhone}
                    buttonStyle={[styles.button, { backgroundColor: 'purple' }]}
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                    icon={<Icon name='phone' type='font-awesome' color='white' />}
                />
                <Button
                    title="Sign in with Email"
                    onPress={() => console.log('Sign in with Email')}
                    buttonStyle={[styles.button, { backgroundColor: 'red' }]}
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                    icon={<Icon name='email' type='material' color='white' />}
                />
                <Button
                    title="Sign in with Google"
                    onPress={() => console.log('Sign in with Google')}
                    buttonStyle={[styles.button, { backgroundColor: 'orange' }]}
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                    icon={<Icon name='google' type='font-awesome' color='white' />}
                />
                <Button
                    title="Sign in with Twitter"
                    onPress={() => console.log('Sign in with Twitter')}
                    buttonStyle={[styles.button, { backgroundColor: 'cyan' }]}
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                    icon={<Icon name='twitter' type='font-awesome' color='white' />}
                />
                <Button
                    title="Sign in with Facebook"
                    onPress={() => console.log('Sign in with Facebook')}
                    buttonStyle={[styles.button, { backgroundColor: 'blue' }]}
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.buttonContainer}
                    icon={<Icon name='facebook' type='font-awesome' color='white' />}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#282C35"
    },
    topSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        marginBottom: 350,
        width: 75,
        height: 75,
    },
    button: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonTitle: {
        textAlign: 'center',
        marginRight: 10,
        flex: 1, // Adjust to fill the available space
    },
    buttonContainer: {
        width: '80%',
    },
    labelTopLeft: {
        position: 'absolute',
        left: 10,
        top: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    bottomSection: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
});

export default LoginScreen;
