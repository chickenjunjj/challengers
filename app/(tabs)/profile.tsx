import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import PressableOpacity from "@/components/PressableOpacity";

export default function Profile() {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <PressableOpacity onPress={() => router.replace("../signup")}>
        <Text>Sign out</Text>
      </PressableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
