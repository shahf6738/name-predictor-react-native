import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../styles/colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎯</Text>

      <Text style={styles.title}>Name Predictor</Text>

      <Text style={styles.subtitle}>Think of a name.</Text>

      <Text style={styles.subtitle}>I'll try to read your mind.</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Length")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  icon: {
    fontSize: 72,
    marginBottom: 20,
  },

  emoji: {
    fontSize: 72,
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "800",
    color: COLORS.text,
    textAlign: "center",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 18,
    color: COLORS.textSecondary,
    textAlign: "center",
  },

  button: {
    marginTop: 40,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 16,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
