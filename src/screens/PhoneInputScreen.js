import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Modal } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneInputScreen = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const [countryCode, setCountryCode] = useState('IN'); // Default country code
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        if (alertVisible) {
            const timer = setTimeout(() => {
                setAlertVisible(false);
            }, 2000); // Close the modal after 2 seconds

            return () => clearTimeout(timer); // Cleanup function to clear the timer
        }
    }, [alertVisible]);

    const handleSendOTP = () => {
        // Simulate sending OTP
        setTimeout(() => {
            setAlertMessage('OTP Sent. Please check your mobile for OTP');
            setAlertVisible(true);
            setIsOTPVerified(true);
        }, 2000); // Simulate 2 seconds delay for OTP sending
    };

    const handleVerifyOTP = () => {
        // Simulate OTP verification
        setTimeout(() => {
            if (otp === '123456') {
                setAlertMessage('OTP Verified. You have successfully logged in!');
                setAlertVisible(true);
                setTimeout(() => {
                    setAlertVisible(false);
                    navigation.navigate('News');
                }, 2000); // Hide the alert after 2 seconds and navigate to 'News'
            } else {
                setAlertMessage('Invalid OTP. Please enter the correct OTP');
                setAlertVisible(true);
            }
        }, 2000); // Simulate 2 seconds delay for OTP verification
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={alertVisible}
                onRequestClose={() => setAlertVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.alertText}>{alertMessage}</Text>
                    </View>
                </View>
            </Modal>
            <Image
                source={require('../images/app-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.welcomeText}>Login to Odisha Shorts</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <CountryPicker
                        withFlag
                        withFilter
                        withCountryNameButton
                        withCallingCodeButton
                        withAlphaFilter
                        withCallingCode
                        countryCode={countryCode}
                        onSelect={(country) => {
                            setCountryCode(country.cca2);
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                        keyboardType="phone-pad"
                        placeholder="Mobile Number"
                        placeholderTextColor="#C0C0C0"
                    />
                </View>
                {isOTPVerified ? (
                    <>
                        <View style={styles.inputContainer}>
                            <Icon name='lock' type='font-awesome' color='#007AFF' />
                            <TextInput
                                style={styles.input}
                                value={otp}
                                onChangeText={setOTP}
                                keyboardType="numeric"
                                placeholder="OTP"
                                placeholderTextColor="#C0C0C0"
                            />
                        </View>
                        <Button
                            title="Verify OTP"
                            onPress={handleVerifyOTP}
                            buttonStyle={styles.button}
                        />
                    </>
                ) : (
                    <Button
                        title="Send OTP"
                        onPress={handleSendOTP}
                        buttonStyle={[styles.button, { opacity: mobileNumber.trim() ? 1 : 0.5 }]} // Make the button partially transparent if mobile number is empty
                        disabled={!mobileNumber.trim()} // Disable the button if mobile number is empty or contains only whitespace characters
                    />
                )}
            </View>
            <TouchableOpacity style={styles.footerTextContainer} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.footerText}>Already have an account? Log in</Text>
            </TouchableOpacity>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#007AFF',
        width: '80%',
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        color: '#000000',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 20,
        marginTop: 20,
    },
    footerTextContainer: {
        marginTop: 120,
    },
    footerText: {
        color: '#007AFF',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    alertText: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    },
});

export default PhoneInputScreen;
