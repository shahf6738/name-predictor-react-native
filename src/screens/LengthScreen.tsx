import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import ScreenHeader from "../components/ScreenHeader";
import { RootStackParamList } from "../types/navigation";
import { COLORS } from "../styles/colors";
import { useGameContext } from "../context/GameContext";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Length">;

export default function LengthScreen() {
  const navigation = useNavigation<NavigationProp>();

  const { setNameLength } = useGameContext();

  const [value, setValue] = useState("");

  const handleContinue = () => {
    const length = Number(value);

    if (!length || length < 1 || length > 26) {
      alert("Please enter a valid length between 1 and 26");
      return;
    }

    setNameLength(value);

    navigation.navigate("Columns");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScreenHeader
          step="Step 1 of 4"
          title="Name Length"
          subtitle="How many letters are in the name?"
        />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
          placeholder="Enter length"
        />

        <Pressable style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    padding: 24,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
  },

  input: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
  },

  button: {
    marginTop: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },
});
