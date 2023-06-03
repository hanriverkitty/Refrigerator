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
import { Background } from "../style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

function Login({ navigation }) {
  const [nickname, setNickname] = useState("");
  const onChangeId = (id) => setId(id);
  const onChangePassword = (pass) => setPass(pass);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const log_response = async () => {
    try {
      const response = await axios.post(
        "http://3.104.80.58:8080/api/v1/user/login",
        {
          id: id,
          pw: pass,
        }
      );

      const nick = response.data.name;
      navigation.navigate("Main", { nickname: nick, id: id });
    } catch (error) {
      console.log(error);
      ToastAndroid.show("사용자 정보가 맞지 않습니다!", ToastAndroid.SHORT);
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
            flex: 4,
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
              placeholder="아이디"
              {...styles.input_st}
              onChangeText={onChangeId}
            ></TextInput>
            <FontAwesome
              name="user"
              size={30}
              color="#6cc7a9"
              style={{ position: "absolute", right: 10, top: 5 }}
            />
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10 }}
              placeholder="비밀번호"
              {...styles.input_st}
              onChangeText={onChangePassword}
              secureTextEntry={true}
            ></TextInput>
            <FontAwesome
              name="lock"
              size={30}
              color="#6cc7a9"
              style={{ position: "absolute", right: 10, top: 5 }}
            />
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
            onPress={log_response}
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
              로그인
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity style={{ marginLeft: "10%" }}>
            <View>
              <Text style={{ color: "black", fontSize: 15 }}>아이디 찾기</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: "4%" }}>
            <Text style={{ color: "black", fontSize: 15 }}>비밀번호 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: "23%" }}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={{ color: "black", fontSize: 15 }}>회원가입</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,

            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              paddingVertical: 20,
            }}
          >
            SNS 계정으로 간편하게 로그인 하세요.
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "50%",
            }}
          >
            <Image
              source={require("../assets/kakao.png")}
              style={{ ...styles.icon_st, marginLeft: "40%" }}
            />
            <Image
              source={require("../assets/naver.png")}
              style={styles.icon_st}
            />
            <Image
              source={require("../assets/google.png")}
              style={styles.icon_st}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
const styles = StyleSheet.create({
  input_st: {
    selectionColor: "#6cc7a9",
    textAlign: "left",
    placeholderTextColor: "#b4b4b4",
    underlineColorAndroid: "#b4b4b4",
  },
  icon_st: {
    width: 60,
    height: 60,
    marginLeft: "10%",
  },
});
