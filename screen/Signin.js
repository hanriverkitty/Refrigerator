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

import { SafeAreaView } from "react-native-safe-area-context";
import { styles, Background } from "../style";
import { FontAwesome, Entypo } from "@expo/vector-icons";

function Signin({ navigation }) {
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
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
            ></TextInput>
          </View>
          <View style={{ width: "80%", flexDirection: "row" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10, flex: 1 }}
              placeholder="닉네임"
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
            ></TextInput>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#6cc7a9",
                  fontWeight: "bold",
                  position: "absolute",
                  right: 10,
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
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
            ></TextInput>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#6cc7a9",
                  fontWeight: "bold",
                  position: "absolute",
                  right: 10,
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
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
            ></TextInput>
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10 }}
              placeholder="비밀번호 확인"
              secureTextEntry={true}
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
            ></TextInput>
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={{ fontSize: 20, padding: 10 }}
              placeholder="주소"
              selectionColor={"#6cc7a9"}
              textAlign="left"
              placeholderTextColor={"#b4b4b4"}
              underlineColorAndroid={"#b4b4b4"}
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
            onPress={() => navigation.navigate("Index")}
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
