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
  FlatList,
} from "react-native";
import { styles, Background } from "../style";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

function Main({ route, navigation }) {
  console.log(route.params);
  const nickname = route.params.nickname;
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
            {route.params.nickname}
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
            님의 냉장고
          </Text>
        </View>
        <View style={{ width: "100%", paddingTop: 30, flex: 20 }}>
          <FlatList
            style={{ height: "80%" }}
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
          <View style={{ paddingTop: "20%" }}>
            <View style={M_style.tab_st}>
              <Image
                source={require("../assets/png/아이콘/레시피2.png")}
                style={M_style.tab_ele_st}
              ></Image>
              <TouchableOpacity
                onPress={() => navigation.navigate("Main", { nickname })}
              >
                <Image
                  source={require("../assets/png/아이콘/냉장고1.png")}
                  style={M_style.tab_ele_st}
                ></Image>
              </TouchableOpacity>
              <Image
                source={require("../assets/png/아이콘/커뮤니티1.png")}
                style={M_style.tab_ele_st}
              ></Image>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Main;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aved5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c6a05-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-zbd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28zba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97zf63",
    title: "Second Item",
  },
];

const Item = ({ title }) => (
  <View style={{ justifyContent: "center" }}>
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 7,
      }}
    >
      <Image
        source={require("../assets/png/식재료/감자.png")}
        style={{ width: 80, height: 60 }}
      ></Image>
    </View>
  </View>
);

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
