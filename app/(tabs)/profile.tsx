import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "@/components/Themed";
import { router } from "expo-router";

export default function Profile() {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Pressable onPress={() => router.push("../signup")}>
        <Text>Sign out</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
