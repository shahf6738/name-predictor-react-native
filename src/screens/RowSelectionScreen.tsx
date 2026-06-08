import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { COLORS } from "../styles/colors";
import LetterGrid from "../components/LetterGrid";
import { SECOND_TABLE, FIRST_TABLE } from "../constants/letters";
import { useGameContext } from "../context/GameContext";
import { RootStackParamList } from "../types/navigation";
import ProgressBar from "../components/ProgressBar";
import SelectionHistory from "../components/SelectionHistory";
import { predictName } from "../utils/namePredictor";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Rows">;

export default function RowSelectionScreen() {
  const navigation = useNavigation<NavigationProp>();

  const {
    nameLength,
    selectedColumns,
    selectedRows,
    setSelectedRows,
    setPredictedName,
  } = useGameContext();

  const handleRowSelect = (row: number) => {
    const maxLength = Number(nameLength);

    if (selectedRows.length >= maxLength) {
      return;
    }

    const updatedRows = [...selectedRows, row];

    setSelectedRows(updatedRows);

    if (updatedRows.length === maxLength) {
      const result = predictName(selectedColumns, updatedRows);

      setPredictedName(result);

      navigation.navigate("Result");
    }
  };

  const handleUndo = () => {
    setSelectedRows(selectedRows.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.step}>Step 3 of 4</Text>

      <Text style={styles.title}>Confirm Positions</Text>

      <Text style={styles.subtitle}>
        Tap the row number for each letter in order.
      </Text>

      <ProgressBar current={selectedRows.length} total={Number(nameLength)} />

      <Text style={styles.counter}>
        Selected {selectedRows.length} / {nameLength}
      </Text>

      <SelectionHistory values={selectedRows} onUndo={handleUndo} />
      <View style={styles.card}>
        <View style={styles.headerRow}>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <Pressable
              key={item}
              onPress={() => handleRowSelect(item)}
              style={({ pressed }) => [
                styles.headerCell,
                pressed && styles.pressedCell,
              ]}
            >
              <Text style={styles.headerText}>{item}</Text>
            </Pressable>
          ))}
        </View>

        <LetterGrid data={SECOND_TABLE} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    paddingTop: 60,
  },

  step: {
    color: COLORS.secondary,
    fontWeight: "600",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 8,
  },

  subtitle: {
    marginTop: 8,
    color: COLORS.textSecondary,
    marginBottom: 24,
  },

  counter: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },

  card: {
    alignSelf: "center",
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 4,
  },

  headerRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
    alignSelf: "center",
  },

  headerCell: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  headerText: {
    color: COLORS.white,
    fontWeight: "700",
  },

  pressedCell: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
});
