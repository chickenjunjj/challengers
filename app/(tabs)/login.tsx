import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Text } from "@/components/Themed";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageCont}>
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.image}
        />
      </View>
      <Text style={[styles.welcomeMsg, { color: "#57A147" }]}>
        Ready to rally?
      </Text>
      <Text style={styles.welcomeMsg}>Sign up to meet your next match</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#BBBBBB"
        style={[styles.inputBox, { backgroundColor: "#666666" }]}
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#BBBBBB"
        style={[styles.inputBox, { backgroundColor: "#666666" }]}
      ></TextInput>
      <TouchableOpacity style={styles.buttton}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.toRegister}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.register}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 26 },
  imageCont: { alignItems: "center" },
  image: { width: 300, height: 300 },
  welcomeMsg: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 20,
    paddingRight: 20,
  },
  inputBox: {
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  buttton: {
    marginTop: "auto",
    backgroundColor: "#57A147",
    borderRadius: 10,
    paddingVertical: 13,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 18 },
  toRegister: { flexDirection: "row", justifyContent: "center", marginTop: 15 },
  register: { color: "#57A147" },
});
