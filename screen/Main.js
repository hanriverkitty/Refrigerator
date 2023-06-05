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
  ScrollView,
  FlatList,
  ToastAndroid,
} from "react-native";
import { styles, Background } from "../style";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import axios from "axios";
import { ImgPath } from "./Img";

const Item = ({ item, ingre, onPress }) => (
  <View style={{ justifyContent: "center" }}>
    <TouchableOpacity onPress={onPress}>
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
          source={
            item.ingredientName === "직접추가"
              ? require("../assets/png/아이콘/직접추가.png")
              : { uri: item.ingredientImg }
          }
          // source = {{uri:item.ingredientImg}}
          style={{ resizeMode: "contain", width: 80, height: 60 }}
        ></Image>
      </View>
    </TouchableOpacity>

    <Text
      style={{
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold",
        color: "#545454",
        fontSize: 18,
      }}
    >
      {item.ingredientName} {item.quantity}
      {item.ingredientUnitName}
    </Text>
  </View>
);

function Main({ route, navigation, onPress }) {
  const nickname = route.params.nickname;
  const user_id = route.params.id;
  const [data, setData] = useState({});
  const plus = {
    id: 999,
    img: null,
    ingredientName: "직접추가",
  };
  const load_ingredient = async () => {
    try {
      const response = await axios.get(
        `http://3.104.80.58:8080/api/v1/fridge/${user_id}`
      );
      console.log(response.data);
      setData(response.data);
      const f_data = [...response.data, plus];
      setData(f_data);
      console.log(f_data);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("불러올 수 없음", ToastAndroid.SHORT);
    }
  };
  useEffect(() => {
    load_ingredient();
  }, []);
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
          <FlatList
            style={{ height: "80%", paddingBottom: 10 }}
            data={data}
            renderItem={({ item }) => (
              console.log(item),
              (
                <Item
                  item={item}
                  ingre={item.ingredientName}
                  onPress={() => {
                    item.ingredientName === "직접추가"
                      ? navigation.navigate("Ingredient", { nickname, user_id })
                      : null;
                  }}
                />
              )
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "space-evenly",
              marginBottom: 30,
            }}
          />
          <View style={{ paddingTop: "20%" }}>
            <View style={M_style.tab_st}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Recipe", { nickname })}
              >
                <Image
                  source={require("../assets/png/아이콘/레시피1.png")}
                  style={M_style.tab_ele_st}
                ></Image>
              </TouchableOpacity>
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Main;

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aved5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c6a05-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-zbd96-145571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28zba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97zf63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145z571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3cad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-xfbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571ez29d72",
//     title: "Third Item",
//   },
//   {
//     id: "58694a10f-3da1-471f-bd96-145z571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "bd7acbe4a-c1b1-46c2-aed5-3cad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68af3c-c605-48d3-a4f8-xfbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "586942a0f-3da1-471f-bd96-145571ez29d72",
//     title: "Third Item",
//   },
// ];

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
