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
  KeyboardAvoidingView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";

function Add_modify({ route, navigation }) {
  const nickname = route.params.nickname;
  const user_id = route.params.user_id;
  const id = route.params.id;
  const [quantity, setQuantity] = useState();
  const onChangeQuantity = (quantity) => setQuantity(quantity);
  const onChangeDate = (date) => setDate(date);
  const [date, setDate] = useState("");
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "실온", value: "실온" },
    { label: "냉장", value: "냉장" },
    { label: "냉동", value: "냉동" },
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: "개", value: 1 },
    { label: "근", value: 2 },
    { label: "단", value: 3 },
    { label: "알", value: 4 },
  ]);
  const post_ingre = async () => {
    try {
      const response = await axios.post(
        `http://3.104.80.58:8080/api/v1/fridge`,
        {
          userId: data.userId,
          ingredientId: value1,
          expirationDate: date,
          quantity: parseInt(quantity),
          location: value,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("불러올 수 없음", ToastAndroid.SHORT);
    }
  };
  const get_info = async () => {
    try {
      const response = await axios.get(
        `http://3.104.80.58:8080/api/v1/fridge/ingredient/${id}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("불러올 수 없음", ToastAndroid.SHORT);
    }
  };
  useEffect(() => {
    get_info();
  }, []);
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
            <View style={{ padding: 25, marginLeft: -10 }}>
              <FontAwesome
                name="arrow-left"
                size={40}
                color="white"
                onPress={() => navigation.goBack()}
              />
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
                source={{ uri: data.ingredientImg }}
                style={{
                  alignSelf: "center",
                  height: "60%",
                  width: "60%",
                  resizeMode: "contain",
                }}
              ></Image>
            </View>
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
              <TextInput
                style={{
                  width: "70%",
                  backgroundColor: "white",
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,
                  textAlign: "center",
                  padding: 10,
                  marginTop: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                onChangeText={onChangeQuantity}
              ></TextInput>
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
              <DropDownPicker
                open={open1}
                value={value1}
                items={items1}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setItems1}
                placeholder="단위"
                placeholderStyle={{
                  color: "#999999",
                  textAlign: "center",
                  paddingLeft: 20,
                }}
                dropDownDirection="TOP"
                style={{
                  backgroundColor: "white",
                  width: "70%",
                  padding: 10,
                  fontSize: 20,
                  marginTop: 10,
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,
                  textAlign: "center",
                  borderColor: "white",
                }}
                labelStyle={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                textStyle={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                dropDownContainerStyle={{
                  borderColor: "black",
                }}
              ></DropDownPicker>
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
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="선택"
                placeholderStyle={{
                  color: "#999999",
                  textAlign: "center",
                  paddingLeft: 30,
                }}
                dropDownDirection="BOTTOM"
                style={{
                  backgroundColor: "white",
                  width: "85%",
                  padding: 10,
                  fontSize: 20,
                  marginTop: 10,
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,
                  textAlign: "center",
                  borderColor: "white",
                }}
                labelStyle={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                textStyle={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                dropDownContainerStyle={{
                  borderColor: "black",
                }}
              ></DropDownPicker>
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
              <TextInput
                placeholder="소비기한"
                placeholderTextColor={"#999999"}
                style={{
                  backgroundColor: "white",
                  width: "85%",
                  padding: 10,
                  fontSize: 20,
                  marginTop: 10,
                  elevation: 7,
                  alignSelf: "center",
                  borderRadius: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                onChangeText={onChangeDate}
              ></TextInput>
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
              onPress={post_ingre}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                추가하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Add_modify;
const styles = StyleSheet.create({
  inputText_st: {
    selectionColor: "#6cc7a9",
    textAlign: "left",
    placeholderTextColor: "#b4b4b4",
    underlineColorAndroid: "#b4b4b4",
  },
});
