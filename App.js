import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screen/Login";
import Index from "./screen/Index";
import Signin from "./screen/Signin";
import Main from "./screen/Main";
import Recipe from "./screen/Recipe";
import Ingredient from "./screen/Ingredient";
import Add_ingre from "./screen/Add_ingre";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Ingredient" component={Ingredient} />
        <Stack.Screen name="Add_ingre" component={Add_ingre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
