import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { COLORS } from "../styles/colors";
import { useGameContext } from "../context/GameContext";
import { useNavigation } from "@react-navigation/native";

export default function ResultScreen() {
  const navigation = useNavigation<any>();
  const [showPrediction, setShowPrediction] = useState(false);

  const {
    predictedName,
    setNameLength,
    setSelectedColumns,
    setSelectedRows,
    setPredictedName,
  } = useGameContext();

  const handlePlayAgain = () => {
    setNameLength("");
    setSelectedColumns([]);
    setSelectedRows([]);
    setPredictedName("");

    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🎉</Text>

      <Text style={styles.title}>Prediction Complete</Text>

      <View style={styles.predictionCard}>
        {showPrediction ? (
          <Text style={styles.name}>{predictedName}</Text>
        ) : (
          <PrimaryButton
            title="Reveal Prediction"
            onPress={() => setShowPrediction(true)}
          />
        )}
      </View>

      <Pressable style={styles.playAgainButton} onPress={handlePlayAgain}>
        <Text style={styles.playAgainText}>Play Again</Text>
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
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
    color: COLORS.text,
  },

  name: {
    fontSize: 42,
    fontWeight: "800",
    marginTop: 20,
    color: COLORS.primary,
  },

  button: {
    marginTop: 40,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },

  playAgainButton: {
    marginTop: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,

    borderRadius: 14,

    borderWidth: 2,
    borderColor: COLORS.primary,

    alignSelf: "center",
  },

  playAgainText: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: 16,
  },

  predictionCard: {
    width: "100%",
    minHeight: 180,

    marginTop: 30,
    marginBottom: 30,

    backgroundColor: COLORS.white,

    borderRadius: 24,

    justifyContent: "center",
    alignItems: "center",

    padding: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 4,
  },
});
