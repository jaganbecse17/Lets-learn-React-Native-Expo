import { InputField } from "@/components/form";
import { useAuthContext } from "@/contexts/AuthContext";
import { router } from "expo-router";
import { useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");

  const { userLogin } = useAuthContext();

  const handleLogin = () => {
    if (!emailRef.current || !passwordRef.current) {
      return;
    }
    const user = {
      email: emailRef.current,
      password: passwordRef.current,
    };
    userLogin(user);
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageContainer}>
        <Text style={styles.header}>Welcome Expo developer!</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}> Email</Text>
          <InputField onChangeText={(value) => (emailRef.current = value)} />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}> Password</Text>
          <InputField
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 24 }}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.ctaText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  inputWrapper: { marginVertical: 12 },

  header: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 26,
  },
  pageContainer: {
    backgroundColor: "#4ea5dbb1",
    margin: 52,
    padding: 32,
    borderRadius: 16,
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 12,
    borderRadius: 8,
  },
  ctaText: { color: "#fff", textAlign: "center" },
  label: { color: "#fff" },
});
