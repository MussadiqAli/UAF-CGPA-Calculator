import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



const Header = () => {
    return (
        <View>
            <LinearGradient colors={['#2fb41b', '#125c07']} style={styles.linearGradient}>
                <Image style={styles.img} source={require('../images/logo.png')} />
                <Text style={styles.text}>UAF CGPA Calculator</Text>
            </LinearGradient>
        </View>

        
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 80,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        borderBottomColor: 'rgb(255, 208, 0)',
        borderBottomWidth: 2,

    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    img: {
        width: 62,
        height: 70,
    }
});

export default Header;
