import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui';
import { useAuthContext } from '@/contexts/AuthContext';
import { Image } from 'expo-image';
import { Href, Redirect } from 'expo-router';

const headerImage = require('@/assets/images/partial-react-logo.png');

export default function HomeScreen() {
    const { isAuthenticated, logoutUser } = useAuthContext();

    const handleLogout = () => {
        logoutUser();
    };

    if (!isAuthenticated) {
        return <Redirect href={'(auth)/login' as Href} />;
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image source={headerImage} style={styles.reactLogo} />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>
            <Button label="App logout" onPress={handleLogout} />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    reactLogo: {
        bottom: 0,
        height: 178,
        left: 0,
        position: 'absolute',
        width: 290,
    },
    titleContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
    },
});
