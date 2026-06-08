import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../styles/colors";
import LetterGrid from "../components/LetterGrid";
import { FIRST_TABLE } from "../constants/letters";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useGameContext } from "../context/GameContext";
import ScreenHeader from "../components/ScreenHeader";
import ProgressBar from "../components/ProgressBar";
import SelectionHistory from "../components/SelectionHistory";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Columns">;

export default function ColumnSelectionScreen() {
  const navigation = useNavigation<NavigationProp>();

  const { nameLength, selectedColumns, setSelectedColumns } = useGameContext();

  const handleColumnSelect = (column: number) => {
    const maxLength = Number(nameLength);

    if (selectedColumns.length >= maxLength) {
      return;
    }

    const updatedColumns = [...selectedColumns, column];

    setSelectedColumns(updatedColumns);

    if (updatedColumns.length === maxLength) {
      navigation.navigate("Rows");
    }
  };

  const handleUndo = () => {
    setSelectedColumns(selectedColumns.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        step="Step 2 of 4"
        title="Select Columns"
        subtitle="Find each letter of your name and tap its column number."
      />

      <ProgressBar
        current={selectedColumns.length}
        total={Number(nameLength)}
      />

      <Text style={styles.counter}>
        Selected {selectedColumns.length} / {nameLength}
      </Text>

      <SelectionHistory values={selectedColumns} onUndo={handleUndo} />

      <View style={styles.card}>
        <View style={styles.headerRow}>
          {[0, 1, 2, 3, 4].map((item) => (
            <Pressable
              key={item}
              onPress={() => handleColumnSelect(item)}
              style={({ pressed }) => [
                styles.headerCell,
                pressed && styles.pressedCell,
              ]}
            >
              <Text style={styles.headerText}>{item}</Text>
            </Pressable>
          ))}
        </View>

        <LetterGrid data={FIRST_TABLE} />
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
    color: "white",
    fontWeight: "700",
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

  pressedCell: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
});
