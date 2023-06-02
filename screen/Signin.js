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

function Signin({ navigation }) {
  const [nick, setNick] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [pass_check, setPass_check] = useState("");
  const [address, setAddress] = useState("");

  const onChangeNick = (nick) => setNick(nick);
  const onChangeId = (id) => setId(id);
  const onChangeName = (name) => setName(name);
  const onChangePass = (pass) => setPass(pass);
  const onChangePass_check = (pass_check) => setPass_check(pass_check);
  const onChangeAddress = (address) => setAddress(address);

  const nick_check = async () => {
    try {
      const response = await axios.get(
        `http://3.104.80.58:8080/api/v1/user/name/check/${nick}`
      );
      if (response.data.success === true) {
        ToastAndroid.show("중복된 닉네임입니다", ToastAndroid.SHORT);
        setNick("");
      } else if (response.data.success === false) {
        ToastAndroid.show("사용가능한 닉네임입니다", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const id_check = async () => {
    try {
      const response = await axios.get(
        `http://3.104.80.58:8080/api/v1/user/id/check/${id}`
      );
      if (response.data.success === true) {
        ToastAndroid.show("중복된 아이디입니다", ToastAndroid.SHORT);
        setId("");
      } else if (response.data.success === false) {
        ToastAndroid.show("사용가능한 아이디입니다", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const user_regist = async () => {
    console.log(id, name, pass, pass_check, nick, address);

    try {
      const response = await axios.post(
        "http://3.104.80.58:8080/api/v1/user/register",
        {
          id: id,
          name: name,
          pw: pass,
          check_pw: pass_check,
          city: address,
          dong: nick,
        }
      );
      if (response.data.name === name) {
        navigation.navigate("Index");
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show("이미 존재하는 사용자입니다", ToastAndroid.SHORT);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#6cc7a9" }}>
        <View style={{ padding: 25, marginLeft: -10 }}>
          <FontAwesome
            name="arrow-left"
            size={40}
            color="white"
            onPress={() => navigation.navigate("Index")}
          />
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ width: "80%" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10 }}
              placeholder="이름"
              onChangeText={onChangeName}
              {...styles.inputText_st}
            ></TextInput>
          </View>
          <View style={{ width: "80%", flexDirection: "row" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10, flex: 1 }}
              placeholder="닉네임"
              {...styles.inputText_st}
              onChangeText={onChangeNick}
              value={nick}
            ></TextInput>
            <TouchableOpacity
              onPress={nick_check}
              style={{
                position: "absolute",
                right: 10,
              }}
            >
              <Text
                style={{
                  color: "#6cc7a9",
                  fontWeight: "bold",
                }}
              >
                중복확인
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", flexDirection: "row" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10, flex: 1 }}
              placeholder="아이디"
              {...styles.inputText_st}
              onChangeText={onChangeId}
              value={id}
            ></TextInput>
            <TouchableOpacity
              onPress={id_check}
              style={{ position: "absolute", right: 10 }}
            >
              <Text
                style={{
                  color: "#6cc7a9",
                  fontWeight: "bold",
                }}
              >
                중복확인
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10 }}
              placeholder="비밀번호"
              secureTextEntry={true}
              {...styles.inputText_st}
              onChangeText={onChangePass}
            ></TextInput>
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10 }}
              placeholder="비밀번호 확인"
              onChangeText={onChangePass_check}
              secureTextEntry={true}
              {...styles.inputText_st}
            ></TextInput>
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10 }}
              placeholder="주소"
              onChangeText={onChangeAddress}
              {...styles.inputText_st}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={user_regist}
            style={{
              width: "80%",
              paddingVertical: 15,
              backgroundColor: "#6cc7a9",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                fontWeight: 800,
                color: "white",
              }}
            >
              회원가입
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signin;
const styles = StyleSheet.create({
  inputText_st: {
    selectionColor: "#6cc7a9",
    textAlign: "left",
    placeholderTextColor: "#b4b4b4",
    underlineColorAndroid: "#b4b4b4",
  },
});
