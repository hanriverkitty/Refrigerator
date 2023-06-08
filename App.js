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
import Add_modify from "./screen/Add_modify";
import Main_modify from "./screen/Main_modify";
import CommunityScreen from "./screen/CommunityScreen.js";
import NotificationScreen from "./screen/NotificationScreen.js";
import PostingScreen from "./screen/PostingScreen.js";
import PostReadingScreen from "./screen/PostReadingScreen.js";
import PostRewritingScreen from "./screen/PostRewritingScreen.js";
import ProfileSettingScreen from "./screen/ProfileSettingScreen.js";
import RecipeScreen from "./screen/RecipeScreen.js";
import UserUserInfoScreen from "./screen/UserInfoScreen.js";

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
        <Stack.Screen name="Add_modify" component={Add_modify} />
        <Stack.Screen name="Main_modify" component={Main_modify} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Posting" component={PostingScreen} />
        <Stack.Screen name="PostReading" component={PostReadingScreen} />
        <Stack.Screen name="PostRewriting" component={PostRewritingScreen} />
        <Stack.Screen name="ProfileSetting" component={ProfileSettingScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="UserInfo" component={UserUserInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
