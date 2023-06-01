import React from "react";
import { View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

function Login({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "black" }}>로그인</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
