import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View, 
    Button, 
    StyleSheet, 
    ScrollView, 
    Text, 
    TouchableOpacity, 
    Image, 
    ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';

const bgImg = require('../assets/background.png');
const goBackImg = require('../assets/icon_arrow-left.png');
const settingImg = require('../assets/setting_icon.png');
const profileImg = require('../assets/profile_img.png');
const arrowImg = require('../assets/arrow_user_info.png');
const profileName = '현희';
const userInfoData = [['내 정보 수정'], ['알람 설정']];


function ProfileSettingScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'></StatusBar>
        <ImageBackground source={bgImg} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.pop()} style={styles.headerLeft}>
                    <Image source={goBackImg}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
                <Image style={styles.userInfoImage} source={profileImg}></Image>
                <Text style={styles.userInfoText}>{profileName}</Text>
                <TouchableOpacity>
                    <Text style={styles.userInfoSetBtn}>프로필 수정</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.userInfoList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {userInfoData.map((userInfo, index) => (
                        <TouchableOpacity key={index}>
                            <View style={styles.userInfoItem}>
                                <View style={{flex:3}}>
                                    <Text style={styles.userInfoItemText}>{userInfo[0]}</Text>
                                </View>
                                <View style={styles.userInfoArrow}>
                                    <Image source={arrowImg}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.logOutBtnBox}>
                    <TouchableOpacity>
                        <Text style={styles.logOutText}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View>
  );
}

export default ProfileSettingScreen;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: colors.headerGreen,
      paddingTop:20
    },
    backgroundImage:{
        flex:1,
        justifyContent: 'center',
    },
    header:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerLeft:{
        flex:1,
    },
    headerRight:{
        flex:1,
        alignItems:'flex-end'
    },
    userInfo:{
        flex:4,
        paddingTop:40,
        alignItems:'center',
        //backgroundColor:'yellow',
    },
    userInfoImage:{
    },
    userInfoText:{
        fontSize:36,
        color:colors.profileNameGreen,
        marginVertical:5,
    },
    userInfoSetBtn:{
        fontSize:15,
        backgroundColor:colors.messageBoardGray,
        color:colors.profileSetText,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:10,
    },
    userInfoList:{
        flex:8,
        paddingHorizontal:15,
        marginTop:10,
    },
    userInfoItem:{
        flexDirection:'row',
        backgroundColor:'white',
        marginVertical:10,
        borderRadius:20,
        paddingVertical:20,
        paddingHorizontal:15,
    },
    userInfoItemText:{
        fontSize:22,
        color:colors.profileNameGreen,
        marginBottom:5,
    },
    userInfoItemTextSub:{
        fontSize:20,
        color:colors.profileSetText,
    },
    userInfoArrow:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:10,
    },
    logOutBtnBox:{
        justifyContent:'flex-end',
        alignItems:'center',        
        marginBottom:10,
    },
    logOutText:{
        fontSize:25,
        color:'white',
        backgroundColor:colors.logOutBtnGreen,
        borderRadius:30,
        paddingHorizontal:100,
        paddingVertical:10,
        
    },
})