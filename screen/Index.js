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
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { styles, Background } from "../style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Index({ navigation }) {
  return (
    <View style={{ marginTop: 30, flex: 1 }}>
      <ImageBackground source={Background} style={styles.background}>
        <View>
          <Text style={style.title}>냉장고 도둑</Text>
        </View>
        <View style={{ width: "70%", marginTop: "70%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              backgroundColor: "#6cc7a9",
              borderRadius: 20,
            }}
          >
            <Entypo
              name="login"
              size={24}
              color="white"
              style={{ marginLeft: 20 }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "white",
                marginLeft: "25%",
              }}
            >
              로그인
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "70%", marginTop: "15%" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              backgroundColor: "#6cc7a9",
              borderRadius: 20,
            }}
          >
            <FontAwesome
              name="user-plus"
              size={24}
              color="white"
              style={{ marginLeft: 20 }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "white",
                marginLeft: "20%",
              }}
            >
              회원가입
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Index;

const style = StyleSheet.create({
  title: {
    fontSize: 50,
    alignSelf: "center",
    color: "#0ea371",
    fontWeight: 900,
    marginTop: "50%",
  },
});
