import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

export function HelloWave() {
    return <Animated.Text style={styles.text}>👋</Animated.Text>;
}

const styles = StyleSheet.create({
    text: {
        animationDuration: '300ms',
        animationIterationCount: 4,
        animationName: {
            '50%': { transform: [{ rotate: '25deg' }] },
        },
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
    },
});
