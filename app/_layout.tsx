import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthContextProvider } from '@/contexts/AuthContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';

/* eslint-disable camelcase */
// Ignored since this is a special variable used by Expo Router
export const unstable_settings = {
    anchor: '(tabs)',
};
/* eslint-enable camelcase */

function RootLayoutNav() {
    return (
        <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="modal"
                options={{
                    presentation: 'modal',
                    title: 'Modal',
                }}
            />
        </Stack>
    );
}

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <ThemeProvider
                value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <AuthContextProvider>
                    <RootLayoutNav />
                </AuthContextProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
