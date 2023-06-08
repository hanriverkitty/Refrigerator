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
const userInfoData = [['내 정보', '이름: 이현희', '주소: 경기 안산시 상록구'], ['멤버십', '일반 회원'], ['관심 레시피'], ['내 게시글']];

function UserInfoScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'></StatusBar>
        <ImageBackground source={bgImg} resizeMode='cover' style={styles.backgroundImage}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.pop()} style={styles.headerLeft}>
                    <Image source={goBackImg}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileSetting')} style={styles.headerRight}>
                    <Image source={settingImg}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
                <Image style={styles.userInfoImage} source={profileImg}></Image>
                <Text style={styles.userInfoText}>{profileName}</Text>
            </View>
            <View style={styles.userInfoList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                {userInfoData.map((userInfo, index) => (
                    <TouchableOpacity key={index}>
                        <View style={styles.userInfoItem}>
                            <View style={{flex:3}}>
                                <Text style={styles.userInfoItemText}>{userInfo[0]}</Text>
                                <Text style={styles.userInfoItemTextSub}>{userInfo[1]}</Text>
                                <Text style={styles.userInfoItemTextSub}>{userInfo[2]}</Text>
                            </View>
                                {index !== 0 && (
                                    <View style={styles.userInfoArrow}>
                                        <Image source={arrowImg} />
                                    </View>
                                )}
                        </View>
                    </TouchableOpacity>
                
                ))}
                </ScrollView>

            </View>
        </ImageBackground>
        
    </View>
  );
}

export default UserInfoScreen;

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
    },
    userInfoImage:{
    },
    userInfoText:{
        fontSize:36,
        color:colors.profileNameGreen,
    },
    userInfoList:{
        flex:8,
        paddingHorizontal:15,

    },
    userInfoItem:{
        flexDirection:'row',
        backgroundColor:'white',
        marginVertical:10,
        borderRadius:20,
        paddingVertical:15,
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
})