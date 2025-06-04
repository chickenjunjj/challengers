import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Text } from "../components/Themed";
import { router } from "expo-router";
import PressableOpacity from "../components/PressableOpacity";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    setIsLoading(true);
    setErrorMessage(false);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/");
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeMsg}>Welcome back!</Text>
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
      {errorMessage && <Text style={styles.errorMes}>Invalid details</Text>}
      <PressableOpacity onPress={login} style={styles.buttton}>
        <Text style={styles.btnText}>Login</Text>
      </PressableOpacity>
      <View style={styles.toRegister}>
        <Text style={{ color: "white" }}>Don't have an account? </Text>
        <PressableOpacity onPress={() => router.replace("/signup")}>
          <Text style={styles.register}>Sign up</Text>
        </PressableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 26 },
  imageCont: { alignItems: "center" },
  image: { width: 300, height: 300 },
  welcomeMsg: {
    color: "white",
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 20,
    marginTop: 91.5,
    paddingRight: 20,
  },
  inputBox: {
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginBottom: 8,
    fontSize: 18,
  },
  errorMes: { marginTop: 10, alignContent: "center", color: "#57A147" },
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
