import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TouchableOpacity,
  ScrollView } from 'react-native';
import colors from '../assets/colors/colors';

const bgImg = require('../assets/background.png');
const goBackImg = require('../assets/icon_arrow-left.png');
const notificationData = [
  ['2023.06.07', '감자 3알', '1일'],
  ['2023.06.06', '감자 3알', '2일'],
  ['2023.06.05', '감자 3알', '3일'],
  ['2023.06.01', '감자 3알', '7일'],
  ['2023.05.31', '당근 1개', '3일'],
  ['2023.05.27', '당근 1개', '7일'],
];

function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'></StatusBar>
      <ImageBackground source={bgImg} resizeMode='cover' style={styles.backgroundImage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Image style={styles.headerButton} source={goBackImg}></Image>
          </TouchableOpacity>
          
        </View>
        <View style={styles.pageName}>
          <Text style={styles.pageNameText}>알림</Text>
        </View>
        <View style={styles.notification}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {notificationData.map((notification, index) => (
              <View key={index} style={styles.notificationItem}>
              <Text style={styles.notificationDate}>{notification[0]}</Text>
              <View style={{height: 10, color:'black'}}></View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationText}>냉장고 속 </Text>
                <Text style={styles.notificationGreenText}>{notification[1]} </Text>
                <Text style={styles.notificationText}>유통기한이 </Text>
                <Text style={styles.notificationRedText}>{notification[2]} </Text>
                <Text style={styles.notificationText}>남았어요!</Text>
              </View>
            </View>
            ))}
          </ScrollView>
        </View>
        
      </ImageBackground>
      
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.headerGreen,
    paddingTop: 20,
  },
  backgroundImage:{
    flex:1,
    justifyContent: 'center',
  },
  header:{
    flex:1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerButton:{
  },
  pageName:{
    flex:2,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageNameText:{
    fontSize:40,
    color: 'white',
    backgroundColor:'rgba(0, 0, 0, 0.3)',
    padding:10,
    borderRadius:10,
  },
  notification:{
    flex:10,
    //backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical:20,
  },
  notificationItem:{
    backgroundColor:'white',
    marginVertical:10,
    marginHorizontal:5,
    paddingHorizontal:20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  notificationDate:{
    color:'black',
    fontSize:11,
    marginVertical:5,
  },
  notificationContent:{
    flexDirection: 'row',
    marginVertical:5,
  },
  notificationText:{
    color:colors.gray,
    fontSize:15,
  },
  notificationGreenText:{
    color:colors.green,
    fontSize:15,
  },
  notificationRedText:{
    color:colors.red,
    fontSize:15,
  }


})