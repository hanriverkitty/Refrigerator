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
  Modal,
  Pressable,
} from "react-native";
import { styles, Background } from "../style";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";
import axios from "axios";
import { ImgPath } from "./Img";
import { useIsFocused } from "@react-navigation/native";

function Main({ route, navigation, onPress }) {
  const IsFocused = useIsFocused();
  // const [nickname, setNick] = useState(route.params.nickname);
  // const [user_id, setUser] = useState(route.params.user_id);

  const nickname = route.params.nickname;
  const user_id = route.params.id;
  console.log(nickname, user_id, "Main");
  const [data, setData] = useState({});
  const [itemTouch, setItemTouch] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [id, setId] = useState("");
  const [onedata, setOnedata] = useState({});
  const [expire, setExpire] = useState("");
  const [quantity, setQuantity] = useState();
  const [location, setLocation] = useState("");
  const [ingredientId, setIngredientId] = useState("");
  const onChangeDate = (date) => setExpire(date);
  const [modalVisible, setModalVisible] = useState(false);
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
      setData(response.data);
      const f_data = [...response.data, plus];
      setData(f_data);
      console.log(f_data);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("불러올 수 없음", ToastAndroid.SHORT);
    }
  };
  const load_onedata = async (id) => {
    try {
      const response = await axios.get(
        `http://3.104.80.58:8080/api/v1/fridge/ingredient/${id}`
      );
      setOnedata(response.data);
      console.log(response.data);
      setExpire(response.data.expirationDate);
      setQuantity(response.data.quantity);
      setLocation(response.data.location);
      setId(response.data.id);
      setIngredientId(response.data.ingredientId);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("불러올 수 없음", ToastAndroid.SHORT);
    }
  };
  const put_onedata = async () => {
    console.log(id);
    try {
      const response = await axios.put(
        `http://3.104.80.58:8080/api/v1/fridge`,
        {
          expirationDate: expire,
          quantity: quantity,
          location: location,
          userId: user_id,
          ingredientId: ingredientId,
        }
      );
      // console.log(expire);
      console.log(response.data);
      setItemTouch(false);
      load_ingredient();
    } catch (error) {
      console.log(error);
      ToastAndroid.show("오류", ToastAndroid.SHORT);
    }
  };
  const delete_data = async () => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://3.104.80.58:8080/api/v1/fridge/${id}`
      );
      // console.log(expire);
      console.log(response.data);
      setModalVisible(!modalVisible);
      setItemTouch(false);
      load_ingredient();
    } catch (error) {
      console.log(error);
      ToastAndroid.show("오류", ToastAndroid.SHORT);
    }
  };
  useEffect(() => {
    load_ingredient();
  }, [IsFocused]);

  const Item = ({ item, ingre, onPress }) => {
    const borderColor = item.id === selectedId ? "#3AC6AD" : "white";
    const borderWidth = item.id === selectedId ? 3 : 0;
    const color = item.id === selectedId ? "#3AC6AD" : "#545454";
    return (
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 15,
              paddingHorizontal: 5,
              borderRadius: 10,
              elevation: 7,
              borderColor: borderColor,
              borderWidth: borderWidth,
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
            color: color,
            fontSize: 18,
          }}
        >
          {item.ingredientName} {item.quantity}
          {item.ingredientUnitName}
        </Text>
      </View>
    );
  };

  const false_change = () => {
    setItemTouch(false);
    setSelectedId(null);
  };
  const true_change = (id) => {
    setItemTouch(true);
    setSelectedId(id);
    load_onedata(id);
  };
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
        <View style={{ height: "80%", width: "100%", paddingTop: 30 }}>
          <FlatList
            style={{ height: "80%", paddingBottom: 10 }}
            data={data}
            renderItem={({ item }) => (
              <Item
                item={item}
                ingre={item.ingredientName}
                onPress={() => {
                  item.ingredientName === "직접추가"
                    ? navigation.navigate("Ingredient", { nickname, user_id })
                    : itemTouch
                    ? false_change()
                    : true_change(item.id);
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
          <View style={{ height: "28%" }}>
            {itemTouch ? (
              <View
                style={{
                  backgroundColor: "white",
                  height: "100%",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 10,
                    paddingHorizontal: 30,

                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#3AC6AD",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    수량
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      elevation: 7,
                      width: "30%",
                      textAlign: "center",
                      height: "50%",
                    }}
                  >
                    {quantity}
                  </TextInput>
                  <TouchableOpacity
                    style={{ marginLeft: -10 }}
                    onPress={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <FontAwesome name="plus-circle" size={30} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginLeft: -20 }}
                    onPress={() => {
                      setQuantity(quantity - 1);
                    }}
                  >
                    <FontAwesome name="minus-circle" size={30} color="black" />
                  </TouchableOpacity>
                  <View>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <View
                        style={{
                          marginLeft: "15%",
                          marginTop: "70%",
                          width: "70%",
                          height: "30%",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "white",
                          borderRadius: 10,
                          elevation: 10,
                        }}
                      >
                        <Image
                          style={{ marginTop: "15%" }}
                          source={require("../assets/png/아이콘/trash.png")}
                        ></Image>
                        <Text
                          style={{
                            padding: 20,
                            fontSize: 30,
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          해당 식품을{"\n"} 삭제하시겠습니까?
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            height: "20%",
                            marginTop: "5%",
                          }}
                        >
                          <TouchableOpacity
                            style={{
                              backgroundColor: "#3AC6AD",
                              flex: 1,
                              borderBottomLeftRadius: 10,
                              justifyContent: "center",
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 30,
                                textAlign: "center",
                              }}
                            >
                              취소
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: "#D9D9D9",
                              flex: 1,
                              justifyContent: "center",
                            }}
                            onPress={delete_data}
                          >
                            <Text
                              style={{
                                color: "#5E5E5E",
                                fontWeight: "bold",
                                fontSize: 30,
                                textAlign: "center",
                                borderBottomRightRadius: 10,
                              }}
                            >
                              삭제
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Modal>
                  </View>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <FontAwesome name="trash-o" size={30} color="black" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    alignItems: "center",
                    paddingHorizontal: 30,
                  }}
                >
                  <Text
                    style={{
                      color: "#3AC6AD",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    소비기한
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      elevation: 7,
                      width: "30%",
                      textAlign: "center",
                      width: "70%",
                      marginLeft: 20,
                    }}
                    onChangeText={onChangeDate}
                  >
                    {expire}
                  </TextInput>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      backgroundColor: "#3AC6AD",
                      height: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      전체정보{"\n"}확인하기
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flex: 1,
                      backgroundColor: "#3AC6AD",
                      height: "100%",
                      justifyContent: "center",
                      borderLeftColor: "white",
                      borderLeftWidth: 2,
                    }}
                    onPress={put_onedata}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      완료
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={{ paddingTop: "26%" }}>
                <View style={M_style.tab_st}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Recipe", { nickname, user_id })
                    }
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
            )}
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
