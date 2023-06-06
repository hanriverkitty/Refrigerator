import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";

function Add_ingre({ route, navigation }) {
  const nickname = route.params.nickname;
  const user_id = route.params.user_id;
  const [img, setImg] = useState(null);
  const [addname, setAddname] = useState("");
  const [unit, setUnit] = useState(null);
  const [imgfile, setImgfile] = useState(null);
  const onChangeaddname = (addname) => setAddname(addname);
  const onChangeunit = (unit) => setUnit(unit);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "개", value: 1 },
    { label: "근", value: 2 },
    { label: "단", value: 3 },
    { label: "알", value: 4 },
  ]);
  //사진 권한 가져오기
  const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      alert("게시글을 업로드하려면 권한이 필요합니다");
    }
    pickImage();
  };
  //이미지 선택
  const pickImage = async () => {
    let imageData = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });
    setImg(imageData.assets[0].uri);
    console.log(imageData);
    const formData = new FormData();
    const localUri = imageData.assets[0].uri;
    const filename = localUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename ?? "");
    const type = match ? `image/${match[1]}` : `image`;
    formData.append("img", { uri: localUri, name: filename, type });
    setImgfile(formData);
  };
  //정보 서버에 등록
  const add_info = async () => {
    console.log(imgfile);
    imgfile.append("name", addname);
    imgfile.append("ingredient_unit_id", value);

    try {
      const response = await axios({
        method: "POST",
        url: "http://3.104.80.58:8080/api/v1/ingredient",
        headers: { "Content-Type": "multipart/form-data" },
        data: imgfile,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("등록실패!", ToastAndroid.SHORT);
    }
    navigation.navigate({
      name: "Ingredient",
      params: { nickname: nickname, user_id: user_id },
      merge: true,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        style={{
          flex: 1,
          resizeMode: "stretch",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ padding: 25, marginLeft: -10 }}>
            <FontAwesome
              name="arrow-left"
              size={40}
              color="white"
              onPress={() =>
                navigation.navigate({
                  name: "Ingredient",
                  params: { nickname: nickname, user_id: user_id },
                  merge: true,
                })
              }
            />
          </View>
        </View>
        <View
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "-10%",
          }}
        >
          <TouchableOpacity
            style={{
              width: 200,
              height: 200,
              backgroundColor: "white",
              elevation: 7,
              borderRadius: 10,
              justifyContent: "center",
            }}
            onPress={getPermission}
          >
            <Image
              source={
                img
                  ? { uri: img }
                  : require("../assets/png/아이콘/image_식재료추가.png")
              }
              style={{ alignSelf: "center", height: "70%", width: "70%" }}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              marginTop: "-4%",
              fontSize: 30,
              color: "#6CC7A9",
              fontWeight: "bold",
            }}
          >
            사진추가
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "space-evenly",
            marginTop: "-10%",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 25,
                alignSelf: "center",
                width: "85%",
                fontWeight: "bold",
                color: "#6CC7A9",
              }}
            >
              식품명
            </Text>
            <TextInput
              placeholder="식품명입력"
              placeholderTextColor={"#999999"}
              style={{
                backgroundColor: "white",
                width: "85%",
                padding: 10,
                fontSize: 20,
                marginTop: 10,
                elevation: 7,
                alignSelf: "center",
                borderRadius: 10,
                textAlign: "center",
                fontWeight: "bold",
              }}
              onChangeText={onChangeaddname}
            ></TextInput>
          </View>
          <View>
            <Text
              style={{
                fontSize: 25,
                alignSelf: "center",
                width: "85%",
                fontWeight: "bold",
                color: "#6CC7A9",
              }}
            >
              단위
            </Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="단위선택"
              placeholderStyle={{
                color: "#999999",
                textAlign: "center",
                paddingLeft: 30,
              }}
              style={{
                backgroundColor: "white",
                width: "85%",
                padding: 10,
                fontSize: 20,
                marginTop: 10,
                elevation: 7,
                alignSelf: "center",
                borderRadius: 10,
                textAlign: "center",
                borderColor: "white",
              }}
              labelStyle={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
              textStyle={{
                fontSize: 20,
                fontWeight: "bold",
              }}
              dropDownContainerStyle={{
                borderColor: "black",
              }}
            ></DropDownPicker>
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#70CBAC",
              width: "85%",
              height: "50%",
              borderRadius: 10,
              elevation: 7,
              justifyContent: "center",
            }}
            onPress={add_info}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
              }}
            >
              추가하기
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Add_ingre;
const styles = StyleSheet.create({
  inputText_st: {
    selectionColor: "#6cc7a9",
    textAlign: "left",
    placeholderTextColor: "#b4b4b4",
    underlineColorAndroid: "#b4b4b4",
  },
});
