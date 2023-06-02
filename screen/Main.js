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
  ScrollView,
} from "react-native";
import { styles, Background } from "../style";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
function Main({ route, navigation }) {
  console.log(route.params);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={Background} style={styles.background}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 30,
            paddingHorizontal: 30,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 25,
              width: "70%",
            }}
          >
            냉장고 도둑
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "35%",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <FontAwesome name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Fontisto name="bell" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="user-o" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingBottom: 30, flexDirection: "row" }}>
          <Text style={{ color: "#0ea371", fontWeight: "bold", fontSize: 40 }}>
            {route.params["nickname"]}
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
            님의 냉장고
          </Text>
        </View>
        <View style={{ flex: 20, width: "100%", paddingTop: 30 }}>
          <ScrollView style={{ height: "80%" }}>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
            <Text style={{ color: "black", fontSize: 50 }}>addd</Text>
          </ScrollView>
          <View style={M_style.tab_st}>
            <Image
              source={require("../assets/png/아이콘/레시피1.png")}
              style={M_style.tab_ele_st}
            ></Image>
            <Image
              source={require("../assets/png/아이콘/냉장고2.png")}
              style={M_style.tab_ele_st}
            ></Image>
            <Image
              source={require("../assets/png/아이콘/커뮤니티1.png")}
              style={M_style.tab_ele_st}
            ></Image>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Main;

const M_style = StyleSheet.create({
  tab_st: {
    flexDirection: "row",
    paddingTop: 7,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tab_ele_st: {
    width: 50,
    height: 70,
  },
});
