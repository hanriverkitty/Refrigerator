import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {
  StyleSheet,
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TouchableOpacity,
  ScrollView,
  TextInput } from 'react-native';
import colors from '../assets/colors/colors';

const imageAdd = require('../assets/image_add.png');


function PostingScreen({ navigation }) {
  const [title, setTitle] = useState(null);
  const [tag, setTag] = useState(null);
  const [content, setContent] = useState(null); 
  const [imageUri, setImageUri] = useState(null);

  const handleTitleChange = (text) => {
    setTitle(text);
  };
  const handleTagChange = (text) => {
    setTag(text);
  };
  const handleContentChange = (text) => {
    setContent(text);
  };

  const handleSubmit = () => {

    const filename = imageUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename ?? "");
    const type = match ? `image/${match[1]}` : `image`;

    // API 요청
    const data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('img', { uri: imageUri, name: filename, type });
    data.append('type', '자유');
    data.append('category_id', 1);
    data.append('user_id', 'test');

    console.log(imageUri);
    console.log(filename);
    console.log(type);
    console.log(data);
  
    fetch('http://3.104.80.58:8080/api/v1/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
      body: data,
    })
      .then((response) => response.json())
      .then((responseData) => {
        // 서버 응답 처리
        console.log(responseData);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });

  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        setImageUri(selectedAsset.uri);
      }
    } catch (error) {
      console.log('Error while selecting image:', error);
    }
    
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto'></StatusBar>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeftBtn} onPress={() => navigation.navigate('Community')}>
            <Text style={styles.headerText}>취소</Text>
        </TouchableOpacity>
        <View style={styles.headerCenterBtn}>
            <Text style={styles.headerText}>글 쓰기</Text>
        </View>
        <TouchableOpacity style={styles.headerRightBtn} onPress={handleSubmit}>
            <Text style={styles.headerText}>완료</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.postInput}>
        <View style={styles.titleInput}>
            <TextInput 
                style={styles.titleInputText}
                placeholder='제목을 입력하세요.'
                value={title}
                onChangeText={handleTitleChange}
                multiline
            ></TextInput>
        </View>
        <View style={styles.tagInput}>
            <TextInput
                style={styles.tagInputText}
                placeholder='태그를 입력하세요.'
                value={tag}
                onChangeText={handleTagChange}
                multiline
            ></TextInput>
        </View>
        <View style={styles.contentInput}>
            <TextInput
                style={styles.contentInputText}
                placeholder='내용을 입력하세요.'
                value={content}
                onChangeText={handleContentChange}
                multiline
            ></TextInput>
        </View>
      </View>
      <View style={styles.postImageAdd}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={selectImage}>
            <Image source={imageAdd}></Image>
            <Text style={styles.postImageText}>사진</Text>
            
        </TouchableOpacity>
        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 50, height: 50, marginLeft:10 }} />}
      </View>
    </View>
  );
}

export default PostingScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.headerGreen,
    paddingTop: 20,
  },
  header:{
    flex:3,
    flexDirection:'row',
  },
  headerLeftBtn:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start', 
    paddingLeft:25,
    marginTop:25,
  },
  headerCenterBtn:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30,
  },
  headerRightBtn:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end', 
    paddingRight:25,
    marginTop:25,
  },
  headerText:{
    fontSize:24,
    color:'white',
  },
  postInput:{
    flex:13,
    backgroundColor:'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  titleInput:{
    marginTop:55,
    paddingHorizontal:20,
  },
  titleInputText: {
    fontSize:28,
  },
  tagInput:{
    marginTop:15,
    paddingHorizontal:20,
  },
  tagInputText: {
    fontSize:20,
  },
  contentInput:{
    marginTop:15,
    paddingHorizontal:20,
  },
  contentInputText:{
    fontSize:24,
  },
  postImageAdd:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    alignItems:'flex-end',
    justifyContent:'flex-start',
    padding:20,
  },
  postImageText:{
    fontSize:24,
    marginHorizontal:5,
  },

})