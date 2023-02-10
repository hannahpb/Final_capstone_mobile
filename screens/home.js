import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

const HScreen = ( {navigation} ) => {
    return(
        <View style={{ flex:1, }}>
            <View style = {{ backgroundColor: "#267eaa",flex: 0.5}}>
                <Text style = {{ fontSize: 18, color: 'white', marginTop: 10, marginLeft: 10}}>WELCOME!</Text>
                <Image style={styles.gt2} source = { require('../images/userimage.png')}/>
                <Text style = {styles.gt3}>{global.username}</Text>
                <Text style = {styles.gt4}>{global.email}</Text>
                <Image style={styles.gt5} source = { require('../images/logo2.png')}/>
            </View>
            <View style = {{ backgroundColor: "white",flex: 1, borderRadius:20, marginTop: -95}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 150 }}>
                <Image style={styles.started} source = { require('../images/getstarted.png')}/>
                    <Text style={styles.txt1}>Get Started</Text>
                    <Text style={styles.txt}></Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Appointment')}>
                        <Text style={styles.txt}>Want to book an appointment?</Text>
                        <Text style={styles.click}>Click Here!</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt}></Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('RequestMedicalCertificate')}>
                        <Text style={styles.txt}>Request a medical certificate for pickup?</Text>
                        <Text style={styles.click}>Click Here!</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt}></Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Appointments')}>
                        <Text style={styles.txt}>Want to see accepted appointments?</Text>
                        <Text style={styles.click}>Click Here!</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt}></Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('Doctor')}>
                        <Text style={styles.txt}>Want to see our Doctors?</Text>
                        <Text style={styles.click}>Click Here!</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize:20,
        fontFamily:'sans-serif-condensed',
        
    },
    click:{
        color: '#267eaa',
        fontSize:18,
        fontFamily:'sans-serif',
        textAlign:'center',
        fontWeight:'bold',
        fontStyle:'italic'

    },
    txt1: {
        color: 'black',
        fontSize:30,
        fontFamily:'monospace'
    },
    cont: {
        marginLeft: 10
    },
    an: {
        marginLeft:20,
        marginTop:30,
    },
    sp: {
        marginLeft:250,
        marginTop:-570,
    },
    editprof: {
      backgroundColor: 'white',
      padding:5,
      borderRadius: 20,
      width: 150,
      alignItems: 'center',
      marginTop:15,
    },
    gt: {
        width:10,
        height:10,
        marginLeft: 110,
        marginTop: -12,
      },
    gt2: {
    width:50,
    height:50,
    borderRadius: 50,
    marginTop: 15,
    marginLeft: 10,
    },
    gt5: {
        width:100,
        height:150,
        borderRadius: 50,
        marginTop: -100,
        marginLeft: 270,
        },
    gt3: {
        color: 'white',
        marginLeft: 75,
        marginTop: -45,
        fontSize: 25,
        },
    gt4: {
        color: 'white',
        marginLeft: 75,
        fontSize:15,
        },
    gt1: {
        width:10,
        height:10,
        marginLeft: 290,
        marginTop: -12,
      },
      started:{
        width:100,
        height:100,
        marginTop:-150

      }
  })
export default HScreen;