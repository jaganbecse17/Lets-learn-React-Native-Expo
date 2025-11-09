import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface Props extends PressableProps {
    label: string;
}

export function Button({ label, ...rest }: Props) {
    return (
        <Pressable style={styles.button} {...rest}>
            <Text style={styles.ctaText}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1e90ff',
        borderRadius: 8,
        padding: 12,
    },
    ctaText: { color: '#fff', textAlign: 'center' },
});
