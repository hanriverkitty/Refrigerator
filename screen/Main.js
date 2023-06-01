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

function Main({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Main Page</Text>
    </SafeAreaView>
  );
}

export default Main;
