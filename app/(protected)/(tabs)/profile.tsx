import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "../../../components/Themed";
import { router } from "expo-router";
import PressableOpacity from "../../../components/PressableOpacity";
import { useContext } from "react";
import { AuthContext } from "../../../util/authContext";

export default function Profile() {
  const authState = useContext(AuthContext);
  const signOut = () => {
    console.log(authState.isLoggedIn);
    authState.logOut();
    console.log(authState.isLoggedIn);
  };
  return (
    <SafeAreaView>
      <Text style={{ color: "white" }}>Profile</Text>
      <PressableOpacity onPress={signOut}>
        <Text style={{ color: "white" }}>Sign out</Text>
      </PressableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
