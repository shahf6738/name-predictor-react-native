import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";

type Props = {
  step: string;
  title: string;
  subtitle: string;
};

export default function ScreenHeader({ step, title, subtitle }: Props) {
  return (
    <View>
      <Text style={styles.step}>{step}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
});
