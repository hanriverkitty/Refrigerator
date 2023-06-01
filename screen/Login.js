import React from "react";
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
} from "react-native";
import { styles, Background } from "../style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

function Login({ navigation }) {
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
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
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
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
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
            onPress={() => navigation.navigate("Main")}
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
            onPress={() => navigation.navigate("Singin")}
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
              style={{ width: 60, height: 60, marginLeft: "40%" }}
            />
            <Image
              source={require("../assets/naver.png")}
              style={{ width: 60, height: 60, marginLeft: "10%" }}
            />
            <Image
              source={require("../assets/google.png")}
              style={{ width: 60, height: 60, marginLeft: "10%" }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
