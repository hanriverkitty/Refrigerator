import React from "react";
import { View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

function Signin({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "black" }}>회원가입</Text>
      </View>
    </SafeAreaView>
  );
}

export default Signin;
