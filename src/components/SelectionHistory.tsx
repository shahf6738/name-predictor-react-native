import { View, Text, StyleSheet } from "react-native";

type Props = {
  values: number[];
  onUndo?: () => void;
};

export default function SelectionHistory({ values, onUndo }: Props) {
  if (!values.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {values.map((value, index) => (
        <View key={index} style={styles.badge}>
          <Text>{value}</Text>
        </View>
      ))}

      {values.length > 0 && onUndo && (
        <View style={styles.undoBadge}>
          <Text onPress={onUndo}>✕</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
    flexWrap: "wrap",
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "#E2E8F0",
  },

  undoBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "#FECACA",
  },
});
