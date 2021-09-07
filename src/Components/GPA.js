import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import { calcCredit1, calcCredit2, calcCredit3, calcCredit4, calcCredit5 } from './GPA_Functions'
import Header from './Header';



const GPA = ({ navigation }) => {
  // picker items
  const item = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ]
  // picker palaceholder
  const placeholder = {
    label: 'Credit Hours',
    value: null,
    color: '#0d5c00',
  }


  const [courses, setCourses] = useState(['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'])

  const [marks, setMarks] = useState([]);
  const [hours, setHours] = useState([]);

  


  const marksInput = (text, index, identity) => {
    if (identity === "marks") {
      marks[index] = { marks: parseInt(text), courseID: index }
    }
    if (identity === "credit") {
      hours[index] = { hours: text, courseID: index }
    }
  }

  const addCourse = () => {
    if (courses.length == 15) {
      Alert.alert("Invalid Operation", "Courses should not be more than 15")
    } else {
      setCourses([...courses, `Course ${courses.length + 1}`])
    }
  }
  const removeCourse = () => {
    if (courses.length == 1) {
      Alert.alert("Invalid Operation", "Courses should not be less than one")
    } else {
      courses.pop()
      setCourses([...courses])
    }
  }

  //=========== Valicate Data =================
  const ValidateData = () => {
    if (courses.length !== marks.length || courses.length !== hours.length) {
      Alert.alert("Invalid Input", "Please input the values in all fields")

    } else if (marks.includes(undefined) || hours.includes(undefined)) {
      Alert.alert("Invalid Input", "No field should be empity")
    }
    else {
      var flag = true
      for (var i = 0; i < marks.length; i++) {
        if (Number.isNaN(marks[i].marks) || hours[i].hours === null) {
          Alert.alert("Invalid Input", "Please enter only integer value for marks & credit hours should not be empity")
          flag = false
        }
      }
      if (flag) {
        Calculate()
      }
    }
  }

  //============Calculate GPA==================
  const Calculate = () => {
    var totalCrditHours = 0;
    var totalQulityPoints = 0;
    var flag = true;
    for (var i = 0; i < marks.length; i++) {
      var mks = marks[i].marks
      var crdtHrs = hours[i].hours
      var qP
      if (marks[i].courseID === hours[i].courseID) {
        if (crdtHrs === 1) {
          if (mks >= 0 && mks <= 20) {
            qP = calcCredit1(mks)
          } else {
            flag = false
            Alert.alert("Invalid Input", "For 1 credit hour, marks should be in range of 0 to 20")
          }
        } else if (crdtHrs === 2) {
          if (mks >= 0 && mks <= 40) {
            qP = calcCredit2(mks)
          } else {
            flag = false
            Alert.alert("Invalid Input", "For 2 credit hours, marks should be in range of 0 to 40")
          }
        } else if (crdtHrs === 3) {
          if (mks >= 0 && mks <= 60) {
            qP = calcCredit3(mks)
          } else {
            flag = false
            Alert.alert("Invalid Input", "For 3 credit hours, marks should be in range of 0 to 60")
          }
        } else if (crdtHrs === 4) {
          if (mks >= 0 && mks <= 80) {
            qP = calcCredit4(mks)
          } else {
            flag = false
            Alert.alert("Invalid Input", "For 4 credit hours, marks should be in range of 0 to 80")
          }
        } else if (crdtHrs === 5) {
          if (mks >= 0 && mks <= 100) {
            qP = calcCredit5(mks)
          } else {
            flag = false
            Alert.alert("Invalid Input", "For 5 credit hours, marks should be in range of 0 to 100")
          }
        }
      }
      totalQulityPoints = totalQulityPoints + qP
      totalCrditHours = totalCrditHours + crdtHrs
    }
    if(flag){
      var result = totalQulityPoints / totalCrditHours;
      navigation.navigate('CGPA', {gpa:result.toFixed(2)})
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
          {/* **************************Heading************************** */}
          <Text style={styles.heading}>
            Enter the marks and credit hours of each course to calculate GPA
          </Text>



          {/* **************************Courses list********************* */}
          {courses.map((val, ind) => {
            return (
              <View key={ind} style={styles.course}>
                <TextInput

                  onChangeText={(text) => marksInput(text, ind, "marks")}
                  placeholder={`Marks for ${val}`}
                  style={{ ...styles.input, width: '55%' }}
                  keyboardType="numeric"
                  textAlign='center'
                />
                <RNPickerSelect
                  itemKey={val}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={(value) => marksInput(value, ind, "credit")}
                  placeholder={placeholder}
                  items={item}
                  style={pickerSelectStyles}
                  Icon={() => { return (<Icons name="arrow-drop-down" size={30} color='#0d5c00' />); }}
                />
              </View>
            )
          })}


          {/* ***************************Add Courses********************** */}
          <View style={{ ...styles.course, marginTop: 15 }}>
            <Text style={{ width: '75%', color: '#0d5c00', fontWeight: 'bold' }}>Add or Remove Course</Text>
            <View style={{ width: '25%', flexDirection: 'row', justifyContent: "space-between" }}>
              <Icon onPress={addCourse} name="plus-circle" size={30} color='#0d5c00' />
              <Icon onPress={removeCourse} name="minus-circle" size={30} color='#0d5c00' />
            </View>
          </View>



          {/* **********************Calculate Button********************** */}
          <LinearGradient colors={['#2fb41b', '#125c07']} style={styles.btn}>
            <TouchableOpacity onPress={() => ValidateData()}>
              <Text style={{ color: 'white' }}>Calculate GPA</Text>
            </TouchableOpacity>
          </LinearGradient>

          
          

        </View>
      </ScrollView>
      
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: "100%",
  },
  main: {
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center'
  },
  heading: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#0d5c00'
  },
  course: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#0d5c00',
    height: 40,
    color: '#0d5c00'
  },
  btn: {
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10
  }

});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#0d5c00',
    color: '#0d5c00',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 10
  },
  placeholder: {
    color: 'gray',
  },
});

export default GPA;
