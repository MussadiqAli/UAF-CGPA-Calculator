import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import Icons from 'react-native-vector-icons/MaterialIcons';



const CGPA = ({ route }) => {

    // picker items
    const item = [
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
    ]
    // picker palaceholder
    const placeholder = {
        label: 'Current Semester',
        value: null,
        color: '#0d5c00',
    }

    var props = parseFloat(route.params.gpa)
    console.log(props)
    const [preCGPA, setPreCGPA] = useState('')
    const [crrSem, setCrrSem] = useState('')
    const [GPA, setGPA] = useState(props)
    const [CGPA, setCGPA] = useState("")

    const CalcCGPA = () => {
        if (preCGPA == '' || Number.isNaN(preCGPA)) {
            Alert.alert("Wrong Input", "Please Enter Your Previous Semester CGPA")
        } else if (crrSem == '') {
            Alert.alert("Wrong Input", "Please Select Your Current Semester")
        } else if (preCGPA > 4) {
            Alert.alert("Wrong Input", "CGPA should not be greater than 4")
        } else if (preCGPA < 0.1) {
            Alert.alert("Wrong Input", "CGPA should not be less than 0.1")
        } else {
            var total = 0;
            for (var i = 1; i < crrSem; i++) {
                total = total + preCGPA
            }
            total = total + GPA;
            var cgpa = total / crrSem;
            console.log(cgpa)
            setCGPA(cgpa.toFixed(2))
        }
    }


    return (
        <ImageBackground
            imageStyle={{ opacity: 0.1, position: 'absolute', backgroundColor: 'white', marginTop: 40 }}
            image resizeMode="cover" style={styles.background}
            source={require('../images/background.jpg')}>
            <Header />
            <StatusBar backgroundColor="#0d5c00" />
            <ScrollView>
                <View style={styles.main}>

                    <LinearGradient colors={['#2fb41b', '#125c07']} style={styles.gpa}>
                        <Text style={{ color: 'white', fontWeight: 'bold', margin: 1, fontSize: 16 }}>Your GPA:</Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', margin: 1, fontSize: 22 }}>{GPA}</Text>
                    </LinearGradient>

                    <Text style={styles.heading}>Enter your previous semester CGPA & select your currently finished semester, to calculate your CGPA </Text>


                    <View style={styles.course}>
                        <TextInput
                            onChangeText={(text) => setPreCGPA(parseFloat(text))}
                            placeholder='Previous semester CGPA'
                            style={{ ...styles.input, width: 200 }}
                            keyboardType="numeric"
                            textAlign='center'
                        />
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            onValueChange={(value) => setCrrSem(value)}
                            placeholder={placeholder}
                            items={item}
                            style={pickerSelectStyles}
                            Icon={() => { return (<Icons name="arrow-drop-down" size={30} color='#0d5c00' />); }}
                        />
                    </View>

                    <LinearGradient colors={['#2fb41b', '#125c07']} style={styles.btn}>
                        <TouchableOpacity onPress={() => CalcCGPA()}>
                            <Text style={{ color: 'white' }}>Calculate CGPA</Text>
                        </TouchableOpacity>
                    </LinearGradient>


                    {
                        CGPA !== '' ?
                            <LinearGradient colors={['#2fb41b', '#125c07']} style={styles.gpa}>
                                <Text style={{ color: 'white', fontWeight: 'bold', margin: 1, fontSize: 16 }}>Your CGPA:</Text>
                                <Text style={{ color: 'white', fontWeight: 'bold', margin: 1, fontSize: 22 }}>{CGPA}</Text>
                            </LinearGradient>
                            :
                            null
                    }

                    <Text style={{...styles.footer,marginTop: 30}}>Powered by: Mussadiq Ali</Text>
                    <Text style={styles.footer}>For feedback: mussadiqali8643@gmail.com</Text>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: "100%",
    },
    main: {
        alignItems: 'center'
    },
    heading: {
        width: '100%',
        marginBottom: 10,
        marginTop: 20,
        textAlign: 'center',
        color: '#0d5c00',
        paddingHorizontal: 30,
    },
    gpa: {
        backgroundColor: "red",
        width: '40%',
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    course: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
        paddingBottom: 20,
        borderRadius: 10,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#0d5c00',
        height: 40,
        color: '#0d5c00',
        textAlign: 'right',
        marginTop: 10,
        marginBottom: 10,

    },
    btn: {
        padding: 10,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 10
    },
    footer:{
        color: "gray",
        fontSize: 10,        
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        height: 40,
        borderBottomWidth: 2,
        width: 200,
        textAlign: 'center',
        borderBottomColor: '#0d5c00',
        color: '#0d5c00',
        // paddingRight: 30, // to ensure the text is never behind the icon

    },
    iconContainer: {
        top: 10
    },
    placeholder: {
        color: 'gray',
    },
});

export default CGPA;