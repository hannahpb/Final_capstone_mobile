import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';

const UserScreen = ( {navigation} ) => {
    return(
        <View style={{ flex:1, }}>
            <View style = {{ backgroundColor: "#267eaa",flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={styles.gt2} source = { require('../images/userimage.png')}/>
                <Text style = {{ fontSize: 20, color: 'white'}}>{global.username}</Text>
                <Text style = {{ fontSize: 15, color: 'white'}}>{global.email}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                    <View style={styles.editprof}>
                        <Text style={{ fontWeight:'bold', color: 'white', fontSize:15, paddingTop:15 }}>Edit Profile</Text>
                        {/* <Image style={styles.gt} source = { require('../images/gt.png')}/> */}
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.preferences}>PREFERENCES</Text>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <View style={styles.edit3}>
                        <Text style={{ fontWeight:'bold', color: 'black', fontFamily:'sans-serif', fontSize:20 }}>About</Text>
                        {/* <Image style={styles.gt1} source = { require('../images/gt.png')}/> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Policy')}>
                <View style={styles.edit2}>
                        <Text style={{ fontWeight:'bold', color: 'black', fontFamily:'sans-serif', fontSize:20 }}>Policy</Text>
                        {/* <Image style={styles.gt1} source = { require('../images/gt.png')}/> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UpdatePw')}>
                <View style={styles.edit2}>
                        <Text style={{ fontWeight:'bold', color: 'black', fontFamily:'sans-serif', fontSize:20 }}>Update Password</Text>
                        {/* <Image style={styles.gt1} source = { require('../images/gt.png')}/> */}
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => [Alert.alert("You Have been successfully logged out"), navigation.popToTop()] }>
                <View style={styles.edit2}>
                        <Text style={{ fontWeight:'bold', color: 'black', fontFamily:'sans-serif', fontSize:20}}>Logout</Text>
                        {/* <Image style={styles.gt1} source = { require('../images/gt.png')}/> */}
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    // editprof: {
    //   backgroundColor: 'white',
    //   padding:5,
    //   borderRadius: 20,
    //   width: 150,
    //   alignItems: 'center',
    //   marginTop:5,

    // },
    gt: {
        width:10,
        height:15,
        marginLeft: 110,
        marginTop: -14,
      },
    gt2: {
    width:50,
    height:50,
    borderRadius: 50,
    marginTop: 10,
    },
    gt1: {
        width:12,
        height:15,
        marginLeft: 280,
        marginTop: -12,
        
      },
    edit1: {
      backgroundColor: 'white',
      padding:15,
      width: 320,
      marginTop:10,
      shadowOpacity:1,
      marginLeft: 30,
    },
    edit2: {
        backgroundColor: 'white',
        padding:15,
        width: 320,
        marginTop:10,
        shadowOpacity:1,
        marginLeft: 30,
      },
      edit3: {
        backgroundColor: 'white',
        padding:15,
        width: 320,
        marginTop:15,
        shadowOpacity:1,
        marginLeft: 30,
      },
      preferences: {
        marginTop: 10, 
        marginLeft: 15,
        fontFamily:'sans-serif',
        fontSize:15,
        color:'black'


      }
  })
export default UserScreen;