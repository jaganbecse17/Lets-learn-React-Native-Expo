import { useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { InputField } from '@/components/form';
import { useAuthContext } from '@/contexts/AuthContext';
import { router } from 'expo-router';

export default function LoginPage() {
    const emailRef = useRef<string>('');
    const passwordRef = useRef<string>('');

    const { userLogin } = useAuthContext();

    const handleLogin = () => {
        if (!emailRef.current || !passwordRef.current) {
            return;
        }
        const user = {
            email: emailRef.current,
            password: passwordRef.current,
        };
        userLogin(user);
        router.replace('/(tabs)');
    };

    const handleEmailChange = (value: string) => {
        emailRef.current = value;
    };

    const handlePasswordChange = (value: string) => {
        passwordRef.current = value;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pageContainer}>
                <Text style={styles.header}>Welcome Expo developer!</Text>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}> Email</Text>
                    <InputField onChangeText={handleEmailChange} />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}> Password</Text>
                    <InputField
                        onChangeText={handlePasswordChange}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Pressable style={styles.button} onPress={handleLogin}>
                        <Text style={styles.ctaText}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1e90ff',
        borderRadius: 8,
        padding: 12,
    },
    buttonWrapper: { marginTop: 24 },
    container: { flex: 1, justifyContent: 'center' },
    ctaText: { color: '#fff', textAlign: 'center' },
    header: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 26,
        textAlign: 'center',
    },
    inputWrapper: { marginVertical: 12 },
    label: { color: '#fff' },
    pageContainer: {
        backgroundColor: '#4ea5dbb1',
        borderRadius: 16,
        margin: 52,
        padding: 32,
    },
});
