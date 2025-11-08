import { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const InputField = forwardRef((props: TextInputProps, ref) => {
    return <TextInput style={styles.inputField} {...props} />;
});

InputField.displayName = 'InputField';

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        marginTop: 8,
    },
});
