import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
interface Props extends PressableProps {
  label: string;
}

export const Button = (props: Props) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.ctaText}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1e90ff",
    padding: 12,
    borderRadius: 8,
  },
  ctaText: { color: "#fff", textAlign: "center" },
});
