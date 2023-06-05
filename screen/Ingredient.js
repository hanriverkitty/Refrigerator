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
  KeyboardAvoidingView,
} from "react-native";
import { styles, Background } from "../style";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { ImgPath } from "./Img";
import { useIsFocused } from "@react-navigation/native";
function Ingredient({ route, navigation }) {
  const IsFocused = useIsFocused();

  const nickname = route.params.nickname;
  const user_id = route.params.user_id;
  const [data, setData] = useState({});
  const plus = {
    id: 999,
    img: null,
    name: "직접추가",
  };
  const load_ingredient = async () => {
    try {
      const response = await axios.get(
        `http://3.104.80.58:8080/api/v1/ingredient`
      );
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
  }, [IsFocused]);
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
        <View style={{ padding: 25, marginLeft: -10 }}>
          <FontAwesome
            name="arrow-left"
            size={40}
            color="white"
            onPress={() => navigation.navigate("Main", { nickname, user_id })}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 15, flex: 2 }}>
          <TextInput
            placeholder="검색"
            style={{
              width: "85%",
              backgroundColor: "white",
              fontSize: 20,
              height: "80%",
              borderRadius: 5,
              padding: 10,
              paddingLeft: 15,
            }}
          ></TextInput>
        </View>
        <View style={{ flex: 20, width: "100%", paddingTop: 30 }}>
          <FlatList
            style={{ height: "80%", paddingBottom: 10 }}
            data={data}
            renderItem={({ item }) => (
              <Item
                item={item}
                name={item.name}
                onPress={() => {
                  item.name === "직접추가"
                    ? navigation.navigate("Add_ingre", { nickname, user_id })
                    : navigation.navigate("Add_modify", {
                        nickname,
                        user_id,
                        id: item.id,
                      });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "space-evenly",
              marginBottom: 30,
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Ingredient;

const Item = ({ item, name, onPress }) => (
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
            item.name === "직접추가"
              ? require("../assets/png/아이콘/직접추가.png")
              : { uri: item.img }
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
      {name}
    </Text>
  </View>
);

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
