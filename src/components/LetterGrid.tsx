import { View, Text, StyleSheet } from "react-native";

type Props = {
  data: string[][];
};

export default function LetterGrid({ data }: Props) {
  return (
    <View>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },

  cell: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
  },
});
