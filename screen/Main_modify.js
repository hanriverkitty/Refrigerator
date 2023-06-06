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
  Modal,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";

function Main_modify({ route, navigation }) {
  const nickname = route.params.nickname;
  const user_id = route.params.user_id;
  const onedata = route.params.onedata;
  const id = onedata.id;
  const [modalVisible, setModalVisible] = useState(false);

  console.log(onedata);
  const delete_data = async () => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://3.104.80.58:8080/api/v1/fridge/${id}`
      );
      // console.log(expire);
      console.log(response.data);
      setModalVisible(!modalVisible);
      navigation.navigate({
        name: "Main",
        params: { nickname: nickname, user_id: user_id },
        merge: true,
      });
    } catch (error) {
      console.log(error);
      ToastAndroid.show("오류", ToastAndroid.SHORT);
    }
  };

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
        <View
          style={{
            flex: 1,
            resizeMode: "stretch",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                padding: 25,
                marginLeft: -10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <FontAwesome
                name="arrow-left"
                size={40}
                color="white"
                onPress={() =>
                  navigation.navigate({
                    name: "Main",
                    params: { nickname: nickname, user_id: user_id },
                    merge: true,
                  })
                }
              />
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
                <Image
                  source={require("../assets/png/아이콘/trash1.png")}
                  style={{ width: 40, height: 40 }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 2.5,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: "white",
                elevation: 7,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: onedata.ingredientImg }}
                style={{
                  alignSelf: "center",
                  height: "60%",
                  width: "60%",
                  resizeMode: "contain",
                }}
              ></Image>
            </View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#6CC7A9",
                paddingBottom: 30,
                marginTop: 20,
              }}
            >
              {onedata.ingredientName}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginHorizontal: "auto",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#6CC7A9",
                  fontSize: 25,
                  fontWeight: "bold",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                수량
              </Text>
              <View
                style={{
                  width: "70%",
                  backgroundColor: "white",
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    textAlign: "center",
                  }}
                >
                  {onedata.quantity}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#6CC7A9",
                  fontSize: 25,
                  fontWeight: "bold",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                단위
              </Text>
              <View
                style={{
                  width: "70%",
                  backgroundColor: "white",
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {onedata.ingredientUnitName}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 2.5,
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ zIndex: -9 }}>
              <Text
                style={{
                  fontSize: 25,
                  alignSelf: "center",
                  width: "85%",
                  fontWeight: "bold",
                  color: "#6CC7A9",
                }}
              >
                보관위치
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  width: "85%",
                  padding: 10,
                  marginTop: 10,
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,

                  borderColor: "white",
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {onedata.location}
                </Text>
              </View>
            </View>
            <View style={{ zIndex: -100 }}>
              <Text
                style={{
                  fontSize: 25,
                  alignSelf: "center",
                  width: "85%",
                  fontWeight: "bold",
                  color: "#6CC7A9",
                }}
              >
                소비기한
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  width: "85%",
                  padding: 10,
                  fontSize: 20,
                  marginTop: 10,
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {onedata.expirationDate}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#70CBAC",
                width: "85%",
                height: "50%",
                borderRadius: 10,
                elevation: 7,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                보관방법 확인하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Main_modify;
const styles = StyleSheet.create({
  inputText_st: {
    selectionColor: "#6cc7a9",
    textAlign: "left",
    placeholderTextColor: "#b4b4b4",
    underlineColorAndroid: "#b4b4b4",
  },
});
