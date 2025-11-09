import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export function InputField(props: TextInputProps) {
    return <TextInput style={styles.inputField} {...props} />;
}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 8,
        padding: 12,
    },
});
